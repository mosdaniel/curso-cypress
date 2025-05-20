import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { loginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

xdescribe(CommonPageData.testSuites.autenticacion, ()=>{
    it("inicio de sesion valido",()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar por la pagina de inicio")
        CommonPageMethods.navigateToDemoBlaze()
              cy.wait(500)
        Logger.stepNumber(2)
        Logger.step("Hacer log in en la barra de navegacion")
        CommonPageMethods.clickOnLogInOption()
           cy.wait(500)
        Logger.stepNumber(3)
        Logger.step("Ingresar un nombre de usuario y contraseña validos")
        LoginMethods.insertUsername(loginData.validCredentials.usermame)
        LoginMethods.insertPassword(loginData.validCredentials.password)
         cy.wait(500)     
        Logger.stepNumber(4)
        Logger.step("hacer click en log in para iniciar sesion")
        LoginMethods.clickOnLoginButton();
        Logger.verification("verificar que se redirige al usuario a la pagina de inicio")
        CommonPageMethods.verifySignedUser(loginData.validCredentials.usermame)
          

        Logger.postCondition("hacer log out")
        CommonPageMethods.logout()
          cy.wait(3000)

    });
    xit("inicio de sesion invalido",()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar por la pagina de inicio")
        CommonPageMethods.navigateToDemoBlaze()
              cy.wait(500)
        Logger.stepNumber(2)
        Logger.step("Hacer log in en la barra de navegacion")
        CommonPageMethods.clickOnLogInOption()
           cy.wait(500)
        Logger.stepNumber(3)
        Logger.step("Ingresar un nombre de usuario y/o contraseña invalidos")
        LoginMethods.insertUsername(loginData.validCredentials.usermame)
        LoginMethods.insertPassword("constrasenaInvalida")
         cy.wait(500)     
        Logger.stepNumber(4)
        Logger.step("hacer click en log in para iniciar sesion")
        LoginMethods.clickOnLoginButton();
        Logger.verification("verificar que se muestra un mensaje de error indicando que el inicio de sesion fue fallido")
        LoginMethods.verifyWrongPassMesagge();
            cy.wait(3000)


    })




})





