const { expect } = require('@playwright/test');

exports.IssuesPage = class IssuesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstIssue = page.locator('tr td:nth-child(5) a').nth(1);
    this.apply = page.locator('a', { hasText: 'Apply' });
    this.select = page.locator('#operators_status_id');
    
  }
  async checkFilter() {
    let val = (await this.firstIssue.innerText()).valueOf()
    await this.select.selectOption('c')
    await this.apply.click()
    expect(val).not.toEqual((await this.firstIssue.innerText()).valueOf())
  }
  async checkUrl(){
    await expect(this.page).toHaveURL(/.*issues/);
  }

  
}
