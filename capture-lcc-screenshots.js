const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    // Set viewport to capture full screen
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to the LCC server dashboard
    await page.goto('https://localhost:8088/', { 
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take a full page screenshot of dashboard
    await page.screenshot({ path: 'docs/images/lcc-dashboard.png', fullPage: true });
    
    console.log('Dashboard screenshot captured successfully!');
    
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  }
  
  await browser.close();
})();