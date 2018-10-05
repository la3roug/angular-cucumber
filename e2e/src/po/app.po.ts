import * as puppeteer from 'puppeteer';

export class AppPage {
  browser: puppeteer.Browser;
  page: puppeteer.Page;
  baseUrl = 'http://localhost:4200';

  async init() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
  }

  async gotoPage(url) {
    await this.page.goto(this.baseUrl + url);
    await this.page.screenshot({ path: 'example.png' });
  }

  close() {
    this.browser.close();
  }
}
