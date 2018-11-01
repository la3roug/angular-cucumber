import { AfterAll, BeforeAll, Given, Then, When }  from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../po/app.po';

let appPage: AppPage;

BeforeAll(async () => {
  appPage = new AppPage();
  await appPage.init();
});

Given('a visitor visits our website', async () => {
  await appPage.gotoPage('/');
});

When('the home page is loaded', async () => {
  await appPage.waitFor('h1');
});

Then('he should see a message saying {string}', async message => {
  expect(await appPage.getContent('h1')).to.equal(message);
});

AfterAll(() => {
  appPage.close();
});
