export class CartElement{

    static get buttons(){
        return{
            get placeOrder(){
                return cy.get('button[data-toggle="modal"]')
            }
        }
    }
  
    static get links(){
        return{
            
            delete(product_name){
                return cy.contains("td",product_name).closest("tr").find("a")
            }
        }
    }

}













