const { expect } = require('@playwright/test');

exports.ActivityPage = class ActivityPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checked = page.locator('input[checked]');
    this.checkboxMessages = page.locator('#show_messages')
    this.buttonApply = page.locator("input[type='submit']")
    this.firstActivity = page.locator('dl:first-of-type dt:first-of-type a')
    
  }
  async uncheckAll() {
    let count = await this.checked.count()
    for (let i = 0; i < count; i++) {
      await this.checked.nth(i).click();
    }
  }
  async clickMessage(){
    await this.checkboxMessages.click()
  }
  async clickApply(){
    await this.buttonApply.click()
  }
  async checkFilter(){
    let val = (await this.firstActivity.innerText()).valueOf()
    await this.uncheckAll()
    await this.clickMessage()
    await this.clickApply()
    expect(val).not.toEqual((await this.firstActivity.innerText()).valueOf())
  }
  async checkUrl(){
    await expect(this.page).toHaveURL(/.*activity/);
  }
  
}
