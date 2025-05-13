import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.registroYAutenticacion, ()=>{
    it("registro de usuario valido",()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2)
    Logger.step("hacer click en sign up en la barra de navegacion")
    CommonPageMethods.clickOnSingUpOption();

    Logger.stepNumber(3)
    Logger.step("completar todos los campos obligatorios con informacion valida")
    SignupMethods.insertUsername("jksafbrybcjkassksakajkn");
    SignupMethods.insertPassword("gasdhbcsdnkcnsdpnvsioboa")

    Logger.stepNumber(4)
    Logger.step("hacer click en sign up para registrar el usuario")
    SignupMethods.clickOnSignupButton();
    Logger.verification("verificar que se muestre el mensaje de sign up successful");
    SignupMethods.verifySignupSuccessfulMessageDisplayed()

    
  

    });
   
}); 