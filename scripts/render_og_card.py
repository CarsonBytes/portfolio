from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent.parent

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1200, "height": 630})
    page.goto((root / "og-card.html").as_uri())
    page.screenshot(path=str(root / "assets" / "images" / "og-card.png"))
    browser.close()
