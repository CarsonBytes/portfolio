#!/usr/bin/env python3
"""
Check if carsonng.com is eligible for Google Preferred Sources.

Eligibility = site appears in https://www.google.com/preferences/source
and the deeplink https://www.google.com/preferences/source?q=carsonng.com
no longer shows the 'cannot be set as preferred source' error.

Exit codes:
  0 = eligible
  1 = not eligible (expected today)
  2 = auth expired / redirected to login
  3 = error / DOM changed

Usage:
  python scripts/check_preferred_source.py [--auth /tmp/auth.json] [--domain example.com]
  Adversarial test: python scripts/check_preferred_source.py --domain tenjo.tw --auth /tmp/auth.json
"""
import argparse
import sys

from playwright.sync_api import sync_playwright

DEFAULT_DOMAIN = "carsonng.com"
NOT_ELIGIBLE_MARKERS = [
    "無法新增來源",
    "无法新增来源",
    "目前無法設為偏好來源",
    "目前无法设为偏好来源",
    "currently can't be set as a preferred source",
    "cannot be set as a preferred source",
    "无结果",
    "無結果",
    "no results",
]


def check(auth_path: str | None, domain: str = DEFAULT_DOMAIN) -> int:
    target = f"https://www.google.com/preferences/source?q={domain}"
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context_kwargs = {}
        if auth_path:
            context_kwargs["storage_state"] = auth_path
        context = browser.new_context(**context_kwargs)
        page = context.new_page()
        page.goto(target, wait_until="domcontentloaded", timeout=30000)
        page.wait_for_timeout(5000)

        url = page.url
        # Auth expired: redirected to accounts.google.com
        if "accounts.google.com" in url:
            print(f"Redirected to login: {url}", file=sys.stderr)
            print("auth_expired")
            browser.close()
            return 2

        body = page.evaluate("() => document.body.innerText") or ""
        body_lower = body.lower()
        # Truncate for logs (avoid huge dump)
        snippet = body[:800].replace("\n", " ")
        print(f"Body snippet: {snippet[:400]}", file=sys.stderr)

        is_not_eligible = any(m.lower() in body_lower for m in NOT_ELIGIBLE_MARKERS)
        domain_in_body = domain.lower() in body_lower

        if is_not_eligible:
            print("not_eligible")
            browser.close()
            return 1
        if domain_in_body:
            print("eligible")
            browser.close()
            return 0

        # Fallback: check page title / DOM for error container
        title = page.title().lower()
        if "preferred source" in title and not is_not_eligible:
            print("eligible (by title)")
            browser.close()
            return 0

        print("Unknown DOM — neither eligible nor not_eligible marker found; treating as error", file=sys.stderr)
        print(f"Body repr: {body[:600]!r}", file=sys.stderr)
        print(f"Full body length {len(body)}", file=sys.stderr)
        browser.close()
        return 3


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--auth", default=None, help="Path to Playwright storage_state JSON (from `playwright codegen --save-storage`)")
    ap.add_argument("--domain", default=DEFAULT_DOMAIN, help="Domain to check (default: carsonng.com)")
    args = ap.parse_args()
    code = check(args.auth, args.domain)
    sys.exit(code)


if __name__ == "__main__":
    main()
