import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeElements } from "../pages/home/home.elements";
import { HomeMethods } from "../pages/home/home.methods";
import { loginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { PlaceOrderData } from "../pages/place-order/place-order.data";
import { PlaceOrderMethods } from "../pages/place-order/place-order.methods";
import { ProductDetailsMethods } from "../pages/product-details/product.details.methods";
import { ThankUForUrPurchaseMethods } from "../pages/thank-u-for-ur-purchase/thank-u-for-ur-purchase.methods";
import { Logger } from "../util/logger";
const user = loginData.validCredentials;
const product = "ASUS Full HD";
xdescribe(CommonPageData.testSuites.catalogoYCompras,()=>{
    xit("navegar por categorias",()=>{

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como un usuario registrado")
        Logger.subStep("navegar a la app")
        CommonPageMethods.navigateToDemoBlaze()
               cy.wait(500)
        Logger.subStep("dar click en log in")
        CommonPageMethods.clickOnLogInOption()
               cy.wait(500)
        Logger.subStep("ingresar usuario y contrasena")
        LoginMethods.login(user.usermame,user.password)
               cy.wait(500)
        Logger.subStep("click en el boton log in")
       // LoginMethods.clickOnLoginButton();

        Logger.stepNumber(2)
        Logger.step("navegar a la pagina de inicio")
        CommonPageMethods.clickOnHomeOption()
               cy.wait(500)
        Logger.stepNumber(3)
        Logger.step("seleccionar una categoria")
        HomeMethods.clickOnMonitorsOption()
               cy.wait(500)
        Logger.verification("verificar que se muestra la lista de productos correspondientes")
        HomeMethods.verifyProductDisplayed("Apple monitor 24")
        HomeMethods.verifyProductDisplayed(product)
               cy.wait(1000)

    })


       xit("agregar producto al carrito",()=>{

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como un usuario registrado")
        Logger.subStep("navegar a la app")
        CommonPageMethods.navigateToDemoBlaze()
               cy.wait(500)
        Logger.subStep("dar click en log in")
        CommonPageMethods.clickOnLogInOption()
               cy.wait(500)
        Logger.subStep("ingresar usuario y contrasena")
        LoginMethods.login(user.usermame,user.password)
               cy.wait(500)
        Logger.subStep("click en el boton log in")
       // LoginMethods.clickOnLoginButton();

        Logger.stepNumber(2)
        Logger.step("navegar a la pagina de inicio")
        CommonPageMethods.clickOnHomeOption()
               cy.wait(500)
        Logger.stepNumber(3)
        Logger.step("seleccionar una categoria de productos en el menu de navegacion")
        HomeMethods.clickOnMonitorsOption()
               cy.wait(500)
        Logger.stepNumber(4)
        Logger.step("hacer clic en un producto especifico")
        HomeMethods.clickOnProductLink(product)
               cy.wait(500)

        Logger.stepNumber(5)
        Logger.verification("verificar que se mustra los detalles del producto")
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();
               cy.wait(500)
        Logger.stepNumber(6)
        Logger.step("hacer clic en el boton add to cart")
        ProductDetailsMethods.clickOnAddButton()
               cy.wait(500)
        Logger.stepNumber(7)
        Logger.verification("verificar que se muestra un mensaje de confirmacion y el producto")
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)
               cy.wait(1000)


        

    }) 

     it("realizar una compra",()=>{

        Logger.stepNumber(1)
        Logger.step("iniciar sesion como un usuario registrado")
        Logger.subStep("navegar a la app")
        CommonPageMethods.navigateToDemoBlaze()
               cy.wait(500)
        Logger.subStep("dar click en log in")
        CommonPageMethods.clickOnLogInOption()
               cy.wait(500)
        Logger.subStep("ingresar usuario y contrasena")
        LoginMethods.login(user.usermame,user.password)
               cy.wait(500)
        Logger.subStep("click en el boton log in")
       // LoginMethods.clickOnLoginButton();

        Logger.stepNumber(2)
        Logger.step("navegar a la pagina de inicio")
        CommonPageMethods.clickOnHomeOption()
                cy.wait(500)
        Logger.stepNumber(3)
        Logger.step("seleccionar una categoria de productos en el menu de navegacion")
        HomeMethods.clickOnMonitorsOption()
               cy.wait(500)
        Logger.stepNumber(4)
        Logger.step("hacer clic en un producto especifico")
        HomeMethods.clickOnProductLink(product)
               cy.wait(500)

        Logger.stepNumber(5)
        Logger.verification("verificar que se mustra los detalles del producto")
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();
               cy.wait(500)
        Logger.stepNumber(6)
        Logger.step("hacer clic en el boton add to cart")
        ProductDetailsMethods.clickOnAddButton()
               cy.wait(500)
        Logger.stepNumber(7)
        Logger.verification("verificar que se muestra un mensaje de confirmacion y el producto")
        ProductDetailsMethods.verifyProductAddedMessage()
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)
               cy.wait(1000)

        Logger.stepNumber(8)
        Logger.step("hacer clic en la opcion cart en la barra de navegacion")
        CommonPageMethods.clickOnCartOption()
              cy.wait(500)
        Logger.stepNumber(9)
        Logger.step("verificar que se muestra la pagina del carrito de compras")
        CartMethods.verifyCartPageIsShown();
             cy.wait(500)

        Logger.stepNumber(10)
        Logger.step("hacer clic en el boton place order")
        CartMethods.clickOnPlaceOrderButton();
            cy.wait(500)
        
        Logger.stepNumber(11)
        Logger.step("completar los campos obligatorios en la pagina de informacion de envio")
        PlaceOrderMethods.insertOrderInformation(PlaceOrderData.testData)
         cy.wait(500)
        
        Logger.stepNumber(12)
        Logger.step("hacer click en el boton purchase")
        PlaceOrderMethods.clickOnPurchaseButton()
         cy.wait(500)
        
        Logger.stepNumber(13)
        Logger.step("verificar que se muestra un mensaje de confirmacion y se redirige al usuario a la pagina de inicio")
        ThankUForUrPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        ThankUForUrPurchaseMethods.clickOnOkButton()
        HomeMethods.verifyHomePageIsShown()
         
        cy.wait(10000)
        
    }) 

})