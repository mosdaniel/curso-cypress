import { CartElement } from "./cart.elements";

export class CartMethods{

    static clickOnDeleteLink(product_name){
        CartElement.links.delete(product_name).click();
    }

    static verifyProductAdded(product_name){
        CartElement.links.delete(product_name).should("be.visible")
    }
    static verifyCartPageIsShown(){
        cy.url().should("include","cart.html")
    }



    static clickOnPlaceOrderButton(){
        CartElement.buttons.placeOrder.click()
    }
}