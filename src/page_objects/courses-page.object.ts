import { Selector } from "testcafe";

export class CoursesPageObject {
 
    coursesContainerSelector: Selector;
    featuredCoursesSelector: Selector;
    
    constructor() {

        this.coursesContainerSelector = Selector ("#viewport");
        this.featuredCoursesSelector = Selector ("#comp-jfnm233w").find("span").withText("Featured Courses");
    } 
}