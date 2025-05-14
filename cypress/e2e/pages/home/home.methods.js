import { HomeElements } from "./home.elements";

export class HomeMethods{

    static clickOnPhonesOption(){
        HomeElements.categories.phones.click();
    }
        static clickOnLaptosOption(){
        HomeElements.categories.laptops.click();
    }
        static clickOnMonitorsOption(){
        HomeElements.categories.monitors.click();
    }
    static clickOnProductLink(product_name){
        HomeElements.product(product_name).click();
    }

    static verifyProductDisplayed(productName){
        HomeElements.product(productName).should("be.visible")
    }


}













