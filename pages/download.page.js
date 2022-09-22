const { expect } = require('@playwright/test');

exports.DownloadPage = class DownloadPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.header = page.locator('#content h1');
    this.h2 = page.locator('h2:first-of-type');
    this.sidebarElements = page.locator('#sidebar h3')
  }
  async checkHeader() {
    await expect(this.header).toBeVisible();
    await expect(this.h2).toContainText('Stable releases')
  }
  async checkSidebar(){
    await expect(await this.sidebarElements.count()).toEqual(3)
  }
  async checkUrl(){
    await expect(this.page).toHaveURL(/.*Download/);
  }
  
  
}
