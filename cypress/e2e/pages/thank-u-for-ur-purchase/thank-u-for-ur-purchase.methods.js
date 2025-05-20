import { ThankUForUrPurchaseElements } from "./thank-u-for-ur-purchase.elements";

export class ThankUForUrPurchaseMethods{

    static clickOnOkButton(){
        cy.wait(1000)
        ThankUForUrPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankUForUrPurchaseElements.icons.greenCheckMark.should("exist")
    }



}








