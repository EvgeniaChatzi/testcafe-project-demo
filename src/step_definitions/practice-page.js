import { When } from 'cucumber';

When(/^I navigate to practice page$/, async t => {
    await t.navigateTo("https://www.letskodeit.com/practice-page");
});


When(/^I am on practice page$/, async t => {
    await t.navigateTo("https://learn.letskodeit.com/p/practice");
});