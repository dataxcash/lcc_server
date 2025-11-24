const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
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
    
    // Now let's try to find and navigate to other pages
    // First, let's see what links are available on the page
    const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('a'));
      return anchors.map(anchor => ({
        text: anchor.textContent,
        href: anchor.href
      }));
    });
    
    console.log('Available links:', links);
    
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  }
  
  // Keep browser open for inspection
  // await browser.close();
})();