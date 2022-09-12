const puppeteer = require('puppeteer');

//Example: - Open the browser, go to google homepage and take screenshot.
// (async _ => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();
//   await page.goto("https://www.google.com");
//   await page.screenshot({path: './google.png'});

//   await browser.close();
// })();

//Example: Test Youtube on mobile resolution. (720x1280)
// (async _ => {
//   const browser = await puppeteer.launch({headless: false});
//   const page = await browser.newPage();

//   await page.setViewport({
//     width: 720,
//     height: 1280
//   });

//   await page.goto("https://www.youtube.com");

//   await page.screenshot({path: './yt.png'});

//   await browser.close();
// })();

const delay = _ => {
  return new Promise(res => {
    setTimeout(res, 5000);
  });
}

//Example - Open Amazon, search for mobiles and save screenshot
(async _ => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.setViewport({
    width: 1920,
    height: 1080
  });

  await page.goto("https://www.amazon.in");

  await page.focus("#twotabsearchtextbox");
  await page.keyboard.type("Mobiles");
  // await page.keyboard.press("Enter");
  await page.click("#nav-search-submit-button");
  await delay();

  await page.screenshot({path: "./amazon.png", fullPage: true});
  await browser.close();
})();

//Task: - Go to YouTube (Laptop viewport), search for top 100 bollywood and save screenshot.
//Share that SS on Discord.
//#search -> input#search