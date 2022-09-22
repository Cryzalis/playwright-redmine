const { expect } = require('@playwright/test');

exports.RoadmapPage = class RoadmapPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.forms = page.locator('#content form');
    this.percent = page.locator('#content .percent')
    
  }
  async checkQuantityMatches() {
    expect(await this.forms.count()).toEqual(await this.percent.count())
  }
  async checkUrl(){
    await expect(this.page).toHaveURL(/.*roadmap/);
  }
  
}
