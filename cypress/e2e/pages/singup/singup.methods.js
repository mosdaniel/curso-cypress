import { SignupElements } from "./singup.elements";

export class SignupMethods{

    static insertUsername(username){
        SignupElements.textboxes.username.invoke("val",username)
    }
    static insertPassword(password){
        SignupElements.textboxes.password.invoke("val",password)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.singup.click()
    }

    static singup(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupButton()
    }

}