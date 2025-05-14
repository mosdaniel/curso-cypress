import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearCookies();
        cy.visit(CommonPageData.url)
    }
    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }
    
    static clickOnAboutUstOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }
    
    static clickOnCartOption(){
        CommonPageElements.topMenu.Cart.click();
    }
    
    static clickOnLogInOption(){
        CommonPageElements.topMenu.logIn.click();
    }
    
    static clickOnSingUpOption(){
        CommonPageElements.topMenu.signUp.click();
    }
    static verifyAlert(expectedmessage){
        cy.on('window:alert',(str)=>{
            expect(str).to.equal(expectedmessage)
        })
    }

    static makestring(legth = 10) {
        let result = ""
        const caracteres = "abcdefghijklmnopqrsrtuwxyz0123456789";
        const caractereslength = caracteres.length;
        let counter =0
        while (counter < length){
            result += caracteres.charAt(Math.floor(Math.random()*caractereslength));
            counter += 1;
        }
        return result;




    }



}