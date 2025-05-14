import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginElements } from "./login.elements";

export class LoginMethods{
   static insertUsername(username){
        LoginElements.textBoxes.username.invoke("val",username)
   }
    
   static insertPassword(password){
        LoginElements.textBoxes.password.invoke("val",password)
   }

   static clickOnLoginButton(){
    LoginElements.buttons.login.click()
   }

   static login(username,password){
     Logger.subStep("insertar username")
    this.insertUsername(username)
     Logger.subStep("insertar password")
     this.insertPassword(password)
     Logger.subStep("dar click en el boton loggin")
     this.clickOnLoginButton()
   }

   static verifyWrongPassMesagge(){
     CommonPageMethods.verifyAlert("Wrong password.")
   }






}








