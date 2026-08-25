# Smoke test

Run before every local commit that touches the project grids, `index.php`, `main.js`, `project-grid.js`, or `custom.css`:

```bash
python3 tests/smoke_test.py
```

Rebuilds `index.html` from `index.php`, serves the repo with PHP's built-in server, and drives the real page with Playwright to check both project grids render the right card counts, both filter navs match their spec'd tag/count distribution, filtering actually narrows the visible set, the shared modal opens/closes and honors `#<n>` hash deep-links across both sections, the dark-mode toggle still swaps the GitHub logo (the one place jQuery is still load-bearing), and there are no new console errors or failed network requests.

Requires Python's `playwright` package (`pip install playwright && playwright install chromium`) and a local PHP CLI — the script's `PHP_EXE` constant points at `D:\xampp82\php\php.exe`; update it if PHP lives elsewhere on your machine.

Exits 0 with "All checks passed." on success, 1 with a FAILED list on any regression.
