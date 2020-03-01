import { Selector } from "testcafe";

export class NavigationBarPageObject {
 
    navigationContainer: Selector;
    
    constructor() {

        this.navigationContainer = Selector ("#DrpDwnMn0navContainer");
    }

    getNavigationButtonByTextSelector(text: string) {
        return this.navigationContainer
        .find("p")
        .withText(text);
    }
}

