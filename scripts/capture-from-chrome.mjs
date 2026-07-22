/**
 * Capture screenshots from YOUR already-open Chrome session (Option A).
 *
 * Forces a clean 1440×900 layout at deviceScaleFactor 2 so shots stay sharp
 * even when Windows display scaling is 125%/150%.
 *
 *   npm run capture:chrome -- vkart-ai
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "img", "captures");
const CDP = "http://127.0.0.1:9222";

const WIDTH = 1440;
const HEIGHT = 900;
const DPR = 2;

const name = (process.argv[2] || "vkart-shot").replace(/[^\w.-]+/g, "-");

async function main() {
  await mkdir(outDir, { recursive: true });

  console.log(`Connecting to Chrome at ${CDP}…`);
  const browser = await chromium.connectOverCDP(CDP);
  const context = browser.contexts()[0];
  if (!context) {
    throw new Error("No Chrome context found. Is Chrome running with --remote-debugging-port=9222?");
  }

  const pages = context.pages().filter((p) => !p.url().startsWith("chrome"));
  if (!pages.length) {
    throw new Error("No open tabs found. Open the VKart page you want to capture.");
  }

  const page = pages[pages.length - 1];
  console.log(`Using tab: ${await page.title()}`);
  console.log(`URL: ${page.url()}`);

  const client = await context.newCDPSession(page);

  // Lock layout + retina pixels (beats Windows scaling blur)
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: DPR,
    mobile: false,
    screenWidth: WIDTH,
    screenHeight: HEIGHT,
  });

  await page.waitForTimeout(500);

  await page.addStyleTag({
    content: `
      * { scroll-behavior: auto !important; }
      [class*="cookie"], [id*="cookie"], [class*="consent"],
      [aria-label*="cookie" i] {
        display: none !important;
        visibility: hidden !important;
      }
    `,
  }).catch(() => {});

  const file = path.join(outDir, `${name}.png`);

  // Prefer CDP screenshot at exact DPR for crisp output
  const { data } = await client.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });

  const { writeFile } = await import("node:fs/promises");
  await writeFile(file, Buffer.from(data, "base64"));

  // Restore normal metrics so your Chrome doesn't stay locked
  await client.send("Emulation.clearDeviceMetricsOverride").catch(() => {});

  console.log(`Saved → ${file}`);
  console.log(`Size: ${WIDTH * DPR}×${HEIGHT * DPR}px (layout ${WIDTH}×${HEIGHT} @${DPR}x)`);

  await browser.close(); // disconnect only
}

main().catch((err) => {
  console.error("\nCapture failed:", err.message || err);
  console.error(`
Checklist:
  1. Chrome must be running with --remote-debugging-port=9222
  2. Keep the VKart AI tab open and focused
  3. Run: npm run capture:chrome -- ${name}
`);
  process.exit(1);
});
