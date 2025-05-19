import { CommonPageMethods } from "../common-page/common-page.methods";
import { ProductDetailsElements } from "./produc-details.elements";

export class ProductDetailsMethods{
    static clickOnAddButton(){
        ProductDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed(){
        ProductDetailsElements.buttons.addToCart.should("be.visible")
    }

    static verifyProductAddedMessage(){
        CommonPageMethods.verifyAlert("Product added.")
    }
}









