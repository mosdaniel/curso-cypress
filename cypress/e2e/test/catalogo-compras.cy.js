import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeElements } from "../pages/home/home.elements";
import { HomeMethods } from "../pages/home/home.methods";
import { loginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsMethods } from "../pages/product-details/product.details.methods";
import { Logger } from "../util/logger";
const user = loginData.validCredentials;
const product = "ASUS Full HD";
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
        HomeMethods.verifyProductDisplayed(product)


    })


       it("agregar producto al carrito",()=>{

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
        Logger.step("seleccionar una categoria de productos en el menu de navegacion")
        HomeMethods.clickOnMonitorsOption()
     
        Logger.stepNumber(4)
        Logger.step("hacer clic en un producto especifico")
        HomeMethods.clickOnProductLink(product)
        

        Logger.stepNumber(5)
        Logger.verification("verificar que se mustra los detalles del producto")
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.stepNumber(6)
        Logger.step("hacer clic en el boton add to cart")
        ProductDetailsMethods.clickOnAddButton()

        Logger.stepNumber(7)
        Logger.verification("verificar que se muestra un mensaje de confirmacion y el producto")
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)



        

    }) 

})