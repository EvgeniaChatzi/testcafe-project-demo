import { When } from 'cucumber';
import { NavigationBarPageObject } from "../page_objects/navigation-bar-page.object";
import { CoursesPageObject } from "../page_objects/courses-page.object";

When(/^I navigate to Let's Kode It website$/, async (t: TestController) => {
    await t.navigateTo("https://www.letskodeit.com/practice-page");
});

When(/^I click on the "(.+)" Page button in the Navigation bar$/, async (t, props) => {
    const navigationBarPageObject = new NavigationBarPageObject();
    const [button] = props;

    const buttonElement = navigationBarPageObject.getNavigationButtonByTextSelector(button);

    await t.click(buttonElement);
});


When(/^I am on Courses page$/, async (t) => {
    const coursesPageObject = new CoursesPageObject();
  
    const featuredCoursesElementCount = coursesPageObject.featuredCoursesSelector;

    await t.expect(featuredCoursesElementCount.exists).ok();
});