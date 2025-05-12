import { ThankUForUrPurchaseElements } from "./thank-u-for-ur-purchase.elements";

export class ThankUForUrPurchaseMethods{

    static clickOnOkButton(){
        ThankUForUrPurchaseElements.buttons.ok.click();
    }

    static verifyGreenCheckMarkIsDisplayed(){
        ThankUForUrPurchaseElements.icons.greenCheckMark.should("exist")
    }



}








