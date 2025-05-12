import { HomeElements } from "./home.elements";

export class HomeMethods{

    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }
        static clickOnLaptosOption(){
        HomeElements.categoriesMenu.laptops.click();
    }
        static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }
    static clickOnProductLink(product_name){
        HomeElements.product(product_name).click();
    }



}













