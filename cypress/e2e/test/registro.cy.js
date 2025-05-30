import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { loginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/singup/singup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.makestring();
const pass = CommonPageMethods.makestring(7)
const existinguser = loginData.validCredentials.usermame


xdescribe(CommonPageData.testSuites.registro, ()=>{
    it("registro de usuario valido",()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    CommonPageMethods.navigateToDemoBlaze();
     cy.wait(1000)
    Logger.stepNumber(2)
    Logger.step("hacer click en sign up en la barra de navegacion")
    CommonPageMethods.clickOnSingUpOption();
     cy.wait(1000)
    Logger.stepNumber(3)
    Logger.step("completar todos los campos obligatorios con informacion valida")
    SignupMethods.insertUsername(user);
    SignupMethods.insertPassword(pass)
    cy.log(user)
    cy.log(pass)
     cy.wait(1000)
    Logger.stepNumber(4)
    Logger.step("hacer click en sign up para registrar el usuario")
    SignupMethods.clickOnSignupButton();
    cy.wait(1000)
    Logger.verification("verificar que se muestre el mensaje de sign up successful");
    SignupMethods.verifySignupSuccessfulMessageDisplayed()

    cy.wait(3000)
  

    });

      it("registro de usuario invalido",()=>{
    Logger.stepNumber(1)
    Logger.step("Navegar a la pagina de inicio")
    CommonPageMethods.navigateToDemoBlaze();
     cy.wait(1000)
    Logger.stepNumber(2)
    Logger.step("hacer click en sign up en la barra de navegacion")
    CommonPageMethods.clickOnSingUpOption();
     cy.wait(1000)
    Logger.stepNumber(3)
    Logger.step("completar algunos campos con informacion invalida")
    SignupMethods.insertUsername(existinguser);
    SignupMethods.insertPassword(pass)
    cy.log(user)
    cy.log(pass)
     cy.wait(1000)
    Logger.stepNumber(4)
    Logger.step("hacer click en sign up para registrar el usuario")
    SignupMethods.clickOnSignupButton();
    cy.wait(1000)
    Logger.verification("verificar que se muestre el mensaje error de sign up");
    SignupMethods.verifyThatThisUserAlreadyExistMessageIsDisplayed()

    cy.wait(3000)
  

    });
   
}); 