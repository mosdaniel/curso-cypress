import { use } from "react";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./singup.elements";

export class SignupMethods{

    static insertUsername(username){
        SignupElements.texBoxes.username.invoke("val",username)
    }
    static insertPassword(password){
        SignupElements.texBoxes.password.invoke("val",password)
    }

    static clickOnSignupButton(){
        SignupElements.buttons.singup.click()
    }

    static singup(username,password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnSignupButton()
    }
     static verifySignupSuccessfulMessageDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    };




}