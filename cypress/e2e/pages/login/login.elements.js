export class LoginElements{
    static get textBoxes(){
        return{
            get username(){
                return cy.get("input#loginusername")
            },
            get password(){
                return cy.get("input#loginpassword")
            }
        };

     

    }

    static get buttons(){
        return{
            get close(){
                return cy.get('div[id="LogInModal"]button').eq(1)
            },
            get login(){
                return cy.contains('button',"Log in")
            }
        }
    }







}


















