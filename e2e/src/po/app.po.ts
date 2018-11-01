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
  }

  async getContent(selector) {
    return await this.page
      .evaluate(select => document.querySelector(select).textContent, selector);
  }

  async waitFor(selector) {
    return this.page.waitFor(selector);
  }

  close() {
    this.browser.close();
  }
}
