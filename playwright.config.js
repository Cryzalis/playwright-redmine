// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    channel: 'chrome',
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    
  },
  reporter: "allure-playwright"

};

module.exports = config;

/**

const config = {
  timeout: 30000,
  globalTimeout: 600000,
  reporter: 'list',
  testDir: './tests',
};

module.exports = config;
 */
