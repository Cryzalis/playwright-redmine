// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    channel: 'chrome',
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    
  },
  reporter: [["list"],["dot"],["allure-playwright"],]

};

module.exports = config;
