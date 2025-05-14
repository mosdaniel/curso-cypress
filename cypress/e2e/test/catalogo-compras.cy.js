import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeElements } from "../pages/home/home.elements";
import { HomeMethods } from "../pages/home/home.methods";
import { loginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";
const user = loginData.validCredentials;
describe(CommonPageData.testSuites.catalogoYCompras,()=>{
    it("navegar por categorias",()=>{

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como un usuario registrado")
        Logger.subStep("navegar a la app")
        CommonPageMethods.navigateToDemoBlaze()
        Logger.subStep("dar click en log in")
        CommonPageMethods.clickOnLogInOption()
        Logger.subStep("ingresar usuario y contrasena")
        LoginMethods.login(user.usermame,user.password)
        
        Logger.subStep("click en el boton log in")
       // LoginMethods.clickOnLoginButton();

        Logger.stepNumber(2)
        Logger.step("navegar a la pagina de inicio")
        CommonPageMethods.clickOnHomeOption()

        Logger.stepNumber(3)
        Logger.step("seleccionar una categoria")
        HomeMethods.clickOnMonitorsOption()
        Logger.verification("verificar que se muestra la lista de productos correspondientes")
        HomeMethods.verifyProductDisplayed("Apple monitor 24")
        HomeMethods.verifyProductDisplayed("ASUS Full HD")


    })




})