import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    //const usuario = "ositopanda2080"
    //const contra = "ositopanda2080"
    cy.visit('https://demoblaze.com/')
    //cy.get("a[data-target='#logInModal']").click()
    //LoginMethods.login(usuario,contra)
    //cy.get("a#nameofuser").should("contains.text",usuario)
    cy.wait(20000) 
    CartMethods.clickOnDeleteLink("Nokia lumia 1520")
    //HomeMethods.clickOnProductLink("Samsung galaxy s7")

       cy.wait(5000) 
 
  })
})