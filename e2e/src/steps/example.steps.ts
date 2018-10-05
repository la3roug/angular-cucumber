import { AfterAll, BeforeAll, Given, Then, When }  from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../po/app.po';

let appPage: AppPage;

BeforeAll(async () => {
  appPage = new AppPage();
  await appPage.init();
});

Given('I am here', async () => {
  await appPage.gotoPage('/');
});

When('you are here too', () => {
  console.log('yes you are');
});

Then('we should be here', () => {
  expect(true).to.be.true;
});

AfterAll(() => {
  appPage.close();
});
