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
    
    // Navigate to license management page
    await page.goto('https://localhost:8088/licenses', { 
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take a full page screenshot of license management
    await page.screenshot({ path: 'docs/images/lcc-lic.png', fullPage: true });
    
    console.log('License management screenshot captured successfully!');
    
    // Navigate to LCD management page
    await page.goto('https://localhost:8088/lcd-management', { 
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    // Wait for page to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take a full page screenshot of LCD management
    await page.screenshot({ path: 'docs/images/lcc-lcd.png', fullPage: true });
    
    console.log('LCD management screenshot captured successfully!');
    
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  }
  
  await browser.close();
})();