import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const usuario = "ositopanda2080"
    const contra = "ositopanda2080"
    cy.visit('https://demoblaze.com/')
    cy.get("a[data-target='#logInModal']").click()
    LoginMethods.login(usuario,contra)
    cy.get("a#nameofuser").should("contains.text",usuario)
    cy.wait(5000) 
 
  })
})