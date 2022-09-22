//
const { test,expect } = require('@playwright/test');
const { MainPage } = require('../pages/main.page')
const { DownloadPage } = require('../pages/download.page')
const { ActivityPage } = require('../pages/activity.page')
const { RoadmapPage } = require('../pages/roadmap.page');
const { IssuesPage } = require('../pages/issues.page');

test('homepage has correct header and h2 journey to the Overview page', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goto();
  await mainPage.checkHeader()
  await mainPage.checkLinkOverview()
  await mainPage.clickOverview()
  await mainPage.checkUrl()
});
test(' journey to the Download page  check Title and sidebar', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goto();
  await mainPage.clickDownload()
  const downloadPage = new DownloadPage(page)
  await downloadPage.checkHeader()
  await downloadPage.checkSidebar()
  await downloadPage.checkUrl()
});
test(' journey to the Activity page and check filter', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goto();
  await mainPage.clickActivity()
  const activityPage = new ActivityPage(page)
  await activityPage.checkUrl()
  await activityPage.checkFilter()
});
test(' journey to the Roadmap  check matches ', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goto();
  await mainPage.clickRoadmap()
  const roadmapPage = new RoadmapPage(page)
  await roadmapPage.checkUrl()
  await roadmapPage.checkQuantityMatches()
});
test(' journey to the Issues and check filter ', async ({ page }) => {
  const mainPage = new MainPage(page)
  await mainPage.goto();
  await mainPage.clickIssues()
  const issuesPage = new IssuesPage(page)
  await issuesPage.checkUrl()
  await issuesPage.checkFilter()
});
