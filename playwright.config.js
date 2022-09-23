// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: true,
    baseURL: 'https://www.redmine.org/',
    viewport: { width: 1280, height: 720 },
    channel: 'chromium',
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    
  },
  reporter: [["list"],["dot"],["allure-playwright"],]

};

module.exports = config;
