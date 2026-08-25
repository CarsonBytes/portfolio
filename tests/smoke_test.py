#!/usr/bin/env python3
"""
Pre-commit smoke test for the portfolio site.

Rebuilds index.html from index.php, serves the repo with PHP's built-in
server, and drives the real page with Playwright to check that both
project grids, both filter navs, the shared modal, hash deep-linking,
and dark mode all still work. Run this before every local commit:

    python3 tests/smoke_test.py

Exits 0 on success, 1 on any failed check (prints a summary either way).
"""

import http.client
import re
import socket
import subprocess
import sys
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

REPO_ROOT = Path(__file__).resolve().parent.parent
PHP_EXE = r"D:\xampp82\php\php.exe"
PORT = 8321

# Pre-existing, unrelated to this codebase (external font blocked by the
# sandbox's CSP in the dev environment). Any OTHER console error fails the test.
KNOWN_BENIGN_ERROR_PATTERNS = [
    r"ERR_BLOCKED_BY_RESPONSE\.NotSameOrigin",
]

AI_TAB_COUNTS = {
    "All": 7,
    "Human-in-the-Loop Checkpoints": 1,
    "Deterministic Gates over LLM Judgment": 2,
    "Structural Anti-Hallucination": 2,
    "Automated Compliance Gating": 2,
}

OTHER_TAB_COUNTS = {
    "All": 15,
    "Enterprise Systems": 5,
    "E-Commerce & Payments": 5,
    "CMS & Web Platforms": 3,
    "Mobile & Product Design": 2,
}

HASH_TITLE_CHECKS = {
    0: "Quantitative Trade-Analysis Platform",
    1: "Command Deck",
    6: "AI Regulation Radar",
    7: "e-Learning for HKSARS",
    21: "Citic Securities Broker Site",
}

FEATURED_TITLES = {"Quantitative Trade-Analysis Platform", "Command Deck"}

results = []


def check(name, condition, detail=""):
    results.append((name, bool(condition), detail))
    status = "PASS" if condition else "FAIL"
    line = f"[{status}] {name}"
    if detail and not condition:
        line += f" -- {detail}"
    print(line)


def build_html():
    print("Rebuilding index.html from index.php...")
    out = subprocess.run(
        [PHP_EXE, "-f", "index.php"],
        cwd=REPO_ROOT,
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    check("php build succeeds", out.returncode == 0, out.stderr[:300])
    html = out.stdout
    check("build output non-empty", len(html) > 1000)
    check("no leftover <?php tags", "<?php" not in html)
    (REPO_ROOT / "index.html").write_text(html, encoding="utf-8")
    return html


def wait_for_server(port, timeout=10):
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            conn = http.client.HTTPConnection("localhost", port, timeout=1)
            conn.request("GET", "/")
            conn.getresponse()
            return True
        except (ConnectionRefusedError, socket.timeout, OSError):
            time.sleep(0.2)
    return False


def is_benign(text):
    return any(re.search(p, text) for p in KNOWN_BENIGN_ERROR_PATTERNS)


def run_browser_checks(base_url):
    console_errors = []
    bad_responses = []

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1400, "height": 1000})
        page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
        page.on("response", lambda r: bad_responses.append((r.url, r.status)) if r.status >= 400 else None)

        page.goto(base_url, wait_until="networkidle", timeout=30000)
        page.wait_for_timeout(500)

        # -- legacy plugin fully removed --
        check("no #elastic_grid_demo element", page.locator("#elastic_grid_demo").count() == 0)
        check(
            "no request to jquery-elastic-grid-master/",
            not any("jquery-elastic-grid-master" in u for u, _ in bad_responses + [(page.url, 200)]),
        )

        # -- AI & Governance Projects grid --
        ai_cards = page.locator("#project-grid .project-card")
        check("AI grid has 7 cards", ai_cards.count() == 7, f"got {ai_cards.count()}")

        ai_tabs = page.locator("#project-filter-nav a").all_text_contents()
        ai_tab_map = {}
        for t in ai_tabs:
            m = re.match(r"^(.*) \((\d+)\)$", t)
            if m:
                ai_tab_map[m.group(1)] = int(m.group(2))
        check("AI tab counts match spec", ai_tab_map == AI_TAB_COUNTS, f"got {ai_tab_map}")

        featured = set(page.locator(".project-card.featured-project .project-card-title").all_text_contents())
        check("featured badges on exactly the right 2 projects", featured == FEATURED_TITLES, f"got {featured}")

        ai_titles_in_order = ai_cards.locator(".project-card-title").all_text_contents()
        check(
            "featured AI projects sort first, in original relative order",
            ai_titles_in_order[0] == "Quantitative Trade-Analysis Platform" and ai_titles_in_order[1] == "Command Deck",
            f"got {ai_titles_in_order[:2]}",
        )

        # -- Other Projects grid --
        other_cards = page.locator("#other-grid .project-card")
        check("Other Projects grid has 15 cards", other_cards.count() == 15, f"got {other_cards.count()}")

        other_tabs = page.locator("#other-filter-nav a").all_text_contents()
        other_tab_map = {}
        for t in other_tabs:
            m = re.match(r"^(.*) \((\d+)\)$", t)
            if m:
                other_tab_map[m.group(1)] = int(m.group(2))
        check("Other Projects tab counts match spec", other_tab_map == OTHER_TAB_COUNTS, f"got {other_tab_map}")

        # -- filtering actually changes what's visible --
        page.locator("#project-filter-nav a", has_text=re.compile(r"^Structural Anti-Hallucination")).click()
        visible = page.locator("#project-grid .project-card:not([hidden])").count()
        check("AI filter narrows to 2 visible cards", visible == 2, f"got {visible}")
        page.locator("#project-filter-nav a", has_text=re.compile(r"^All")).click()

        page.locator("#other-filter-nav a", has_text=re.compile(r"^E-Commerce & Payments")).click()
        visible = page.locator("#other-grid .project-card:not([hidden])").count()
        check("Other Projects filter narrows to 5 visible cards", visible == 5, f"got {visible}")
        page.locator("#other-filter-nav a", has_text=re.compile(r"^All")).click()

        # -- modal open/close via card click --
        ai_cards.first.click()
        modal = page.locator("#project-modal")
        check("modal opens on card click", not modal.is_hidden())
        page.keyboard.press("Escape")
        check("Escape closes modal", modal.is_hidden())

        # -- hash deep-linking spans both sections correctly --
        for index, expected_prefix in HASH_TITLE_CHECKS.items():
            page.goto(f"{base_url}#{index}", wait_until="networkidle", timeout=15000)
            title = page.locator(".project-modal-title").text_content() or ""
            check(
                f"hash #{index} opens '{expected_prefix}...'",
                title.startswith(expected_prefix),
                f"got '{title}'",
            )
        page.goto(base_url, wait_until="networkidle", timeout=15000)

        # -- dark mode toggle (still jQuery-dependent; verify it didn't break) --
        github_logo = page.locator("img.github_logo")
        before_src = github_logo.get_attribute("src")
        dark_switch = page.locator("#darkSwitch")
        dark_switch.click(force=True)
        page.wait_for_timeout(200)
        after_src = github_logo.get_attribute("src")
        check("dark mode toggle swaps GitHub logo", before_src != after_src, f"{before_src} -> {after_src}")
        dark_switch.click(force=True)

        browser.close()

    real_errors = [e for e in console_errors if not is_benign(e)]
    check("no unexpected console errors", len(real_errors) == 0, "; ".join(real_errors[:5]))

    real_bad_responses = [(u, s) for u, s in bad_responses if "jquery-elastic-grid-master" not in u]
    check("no failed network requests", len(real_bad_responses) == 0, str(real_bad_responses[:5]))


def main():
    build_html()

    server = subprocess.Popen(
        [PHP_EXE, "-S", f"localhost:{PORT}"],
        cwd=REPO_ROOT,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    try:
        if not wait_for_server(PORT):
            check("dev server starts", False, "php -S never became reachable")
        else:
            run_browser_checks(f"http://localhost:{PORT}")
    finally:
        server.terminate()
        server.wait(timeout=5)

    failed = [r for r in results if not r[1]]
    print()
    print(f"{len(results) - len(failed)}/{len(results)} checks passed")
    if failed:
        print("FAILED:")
        for name, _, detail in failed:
            print(f"  - {name}" + (f" ({detail})" if detail else ""))
        sys.exit(1)
    print("All checks passed.")
    sys.exit(0)


if __name__ == "__main__":
    main()
