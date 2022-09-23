// redmine-main-page.js
const { expect } = require('@playwright/test');

exports.MainPage = class MainPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.linkOverview = page.locator('a', { hasText: 'Overview' });
    this.linkDownload = page.locator('a', { hasText: 'Download' });
    this.linkActivity = page.locator('a', { hasText: 'Activity' });
    this.linkRoadmap = page.locator('a', { hasText: 'Roadmap' });
    this.linkIssues = page.locator('a', { hasText: 'Issues' });
    this.header = page.locator('#content h1');
    this.h2 = page.locator('h2:first-of-type');
  }

  async goto() {
    await this.page.goto('/');
  }

  async checkHeader() {
    await expect(this.header).toBeVisible();
    await expect(this.h2).toContainText('Features')
  }
  async checkLinkOverview(){
    await expect(this.linkOverview).toHaveAttribute('href', '/projects/redmine');
  }

  async clickOverview() {
    await this.linkOverview.click();
  }
  async clickDownload() {
    await this.linkDownload.click();
  }
  async clickActivity() {
    await this.linkActivity.click();
  }
  async clickRoadmap() {
    await this.linkRoadmap.click();
  }
  async clickIssues() {
    await this.linkIssues.click();
  }
  async checkUrl(){
    await expect(this.page).toHaveURL(/.*projects/);
  }
  
}
