import { use } from "react";
import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
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

static emptyCart(username,password){
    Logger.subStep("Navegate to demoblaze application")
    CommonPageMethods.navigateToDemoBlaze();
    Logger.subStep("Log out");
    CommonPageMethods.logout();
    Logger.subStep("click on Home option")
    CommonPageMethods.clickOnHomeOption()
    Logger.subStep("click en login")
    CommonPageMethods.clickOnLogInOption();
    Logger.subStep(`Login con credenciales ${username} / ${password}`)
    LoginMethods.login(username,password);
    Logger.subStep("click on cart option")
    CommonPageMethods.clickOnCartOption();
    this.deleteProducts();

}
static deleteProducts(){
    cy.get(`a[onclick*="deleteItem"]`).each(link=>{

        link.click()

        cy.wait(1000)
    })


}

    static clickOnPlaceOrderButton(){
        CartElement.buttons.placeOrder.click()
    }
}