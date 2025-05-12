import { CartElement } from "./cart.elements";

export class CartMethods{

    static clickOnDeleteLink(product_name){
        CartElement.links.delete(product_name).click();
    }


}