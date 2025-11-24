const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Navigate to the LCC server
    await page.goto('https://localhost:8088/', { 
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    // Take a screenshot
    await page.screenshot({ path: 'docs/images/lcc-screenshot.png' });
    
    console.log('Screenshot captured successfully!');
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  }
  
  await browser.close();
})();