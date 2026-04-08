import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const delay = (ms) => new Promise(r => setTimeout(r, ms));

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:5173 ...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 });
  await delay(3000); // let fonts/animations settle

  // --- 1. Hero / Landing section ---
  console.log('Screenshot 1: Hero section');
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(500);
  await page.screenshot({
    path: path.join(__dirname, 'screenshot_1_hero.png'),
    fullPage: false
  });

  // --- 2. About section (with tabs) ---
  console.log('Screenshot 2: About section');
  const aboutEl = await page.$('#about') || await page.$('[id*="about"]') || await page.$('section[data-section="about"]');
  if (aboutEl) {
    await aboutEl.scrollIntoView();
    await delay(800);
    await aboutEl.screenshot({ path: path.join(__dirname, 'screenshot_2_about.png') });
  } else {
    // Scroll to rough position and take full-width shot
    await page.evaluate(() => {
      const el = Array.from(document.querySelectorAll('section, div')).find(e => e.id && e.id.toLowerCase().includes('about'));
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await delay(800);
    await page.screenshot({ path: path.join(__dirname, 'screenshot_2_about.png'), fullPage: false });
  }

  // --- 3. Blogs section ---
  console.log('Screenshot 3: Blogs section');
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('*')).find(e =>
      (e.id && e.id.toLowerCase().includes('blog')) ||
      (e.getAttribute && e.getAttribute('data-section') && e.getAttribute('data-section').includes('blog'))
    );
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await delay(800);
  await page.screenshot({ path: path.join(__dirname, 'screenshot_3_blogs.png'), fullPage: false });

  // --- 4. Contact section ---
  console.log('Screenshot 4: Contact section');
  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('*')).find(e =>
      (e.id && e.id.toLowerCase().includes('contact'))
    );
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await delay(800);
  await page.screenshot({ path: path.join(__dirname, 'screenshot_4_contact.png'), fullPage: false });

  // --- 5. Footer ---
  console.log('Screenshot 5: Footer');
  await page.evaluate(() => {
    const el = document.querySelector('footer') || Array.from(document.querySelectorAll('*')).find(e => e.id && e.id.toLowerCase().includes('footer'));
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, document.body.scrollHeight);
  });
  await delay(800);
  await page.screenshot({ path: path.join(__dirname, 'screenshot_5_footer.png'), fullPage: false });

  // --- Bonus: full page ---
  console.log('Screenshot: Full page');
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(500);
  await page.screenshot({ path: path.join(__dirname, 'screenshot_full_page.png'), fullPage: true });

  // Print all section IDs found on page for reference
  const ids = await page.evaluate(() =>
    Array.from(document.querySelectorAll('[id]')).map(e => ({ tag: e.tagName, id: e.id }))
  );
  console.log('Elements with IDs:', JSON.stringify(ids, null, 2));

  await browser.close();
  console.log('Done! Screenshots saved.');
}

run().catch(err => { console.error(err); process.exit(1); });
