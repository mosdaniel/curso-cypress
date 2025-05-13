import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

describe('template spec', () => {
  it('passes', () => {
    const usuario = "ositopanda2080"
    const contra = "ositopanda2080"
    Logger.stepNumber(1)
    Logger.step("Navigate to demoblaze page")
    cy.visit('https://demoblaze.com/')

    Logger.stepNumber(2)
    Logger.step("click on login link")
    cy.get("a[data-target='#logInModal']").click()

    Logger.stepNumber(3)
    Logger.step(`login with this credentials: ${usuario} / ${contra}`)
    LoginMethods.login(usuario,contra)
    Logger.verification(`the homepage should show: welcome ${usuario} `)
    cy.get("a#nameofuser").should("contains.text",usuario)
 

    // cy.wait(20000) 
    // CartMethods.clickOnDeleteLink("Nokia lumia 1520")
    //HomeMethods.clickOnProductLink("Samsung galaxy s7")

       cy.wait(5000) 
 
  })
})