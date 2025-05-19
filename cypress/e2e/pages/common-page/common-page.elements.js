export class CommonPageElements{
    static get topMenu(){
        return{
            get home(){
                return cy.contains("a","Home")
            },
            get contact(){
                return cy.contains("a","Contact")
            },
            get aboutUs(){
                return cy.contains("a","About us")
            },
            get Cart(){
                return cy.contains('a', 'Cart')
            },
            get signUp(){
                return cy.contains("a","Sign up")
            },
            get logIn(){
                return cy.contains("a","Log in")
            }
        }
    }



    static get signedUser(){
        return cy.get('a#nameofuser')
        
    }
    
}