/**
 * Capture clean portfolio screenshots of your live projects.
 *
 * Usage:
 *   npx playwright install chromium
 *   npm run capture
 *
 * Outputs PNGs into public/img/captures/ (convert to WebP afterward)
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "img", "captures");

const shots = [
  {
    name: "vkart",
    url: "https://vkart.balavardhan.dev/",
    settleMs: 7000,
    minTextLength: 40,
  },
  {
    name: "image-magic-pro",
    url: "https://img.balavardhan.dev/",
    settleMs: 1500,
  },
  {
    name: "jwt-inspector",
    url: "https://jwt.balavardhan.dev/",
    settleMs: 2000,
  },
  {
    name: "regex-lab",
    url: "https://regex.balavardhan.dev/",
    settleMs: 2000,
  },
  {
    name: "myip-pro",
    url: "https://ip.balavardhan.dev/",
    settleMs: 3500,
    minTextLength: 20,
  },
  {
    name: "diff-pro",
    url: "https://diff.balavardhan.dev/",
    settleMs: 2000,
    clickSample: true,
  },
  {
    name: "fit-tracker-pro",
    url: "https://fittracker.balavardhan.dev/",
    settleMs: 1500,
  },
  {
    name: "weatherly",
    url: "https://weatherly.balavardhan.dev/",
    settleMs: 2000,
  },
];

const VIEWPORT = { width: 1440, height: 900 };
const DEVICE_SCALE_FACTOR = 2;

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE_FACTOR,
    colorScheme: "dark",
  });

  for (const shot of shots) {
    const page = await context.newPage();
    console.log(`Capturing ${shot.name}…`);

    await page.goto(shot.url, { waitUntil: "domcontentloaded", timeout: 60000 });

    if (shot.minTextLength) {
      await page
        .waitForFunction(
          (min) => (document.body?.innerText || "").trim().length > min,
          shot.minTextLength,
          { timeout: 30000 },
        )
        .catch(() => {});
    }

    await page.waitForTimeout(shot.settleMs ?? 1500);

    if (shot.clickSample) {
      const sample = page.getByRole("button", { name: /sample/i });
      if (await sample.count()) {
        await sample.first().click({ timeout: 2000 }).catch(() => {});
        await page.waitForTimeout(1000);
      }
    }

    // Dismiss common consent buttons if present
    for (const label of ["Accept all", "Accept", "Got it", "I agree"]) {
      const btn = page.getByRole("button", { name: label });
      if (await btn.count()) {
        await btn.first().click({ timeout: 1500 }).catch(() => {});
        await page.waitForTimeout(400);
        break;
      }
    }

    await page.addStyleTag({
      content: `
        * { scroll-behavior: auto !important; }
        [class*="cookie"], [id*="cookie"], [class*="consent"],
        [class*="privacy"], [id*="privacy"],
        [class*="chat"], [id*="chat"],
        [aria-label*="cookie" i], [aria-label*="privacy" i],
        [aria-label*="concierge" i] {
          display: none !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `,
    });

    const file = path.join(outDir, `${shot.name}.png`);
    await page.screenshot({
      path: file,
      type: "png",
      fullPage: false,
    });

    console.log(`  → ${file}`);
    await page.close();
  }

  await browser.close();
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
