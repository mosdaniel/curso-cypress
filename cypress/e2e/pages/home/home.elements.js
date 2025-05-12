export class HomeElements{



      static get categories(){
        return{
            get phones(){
                return cy.contains("a","Phones")
            },
            get laptops(){
                cy.contains("a","Laptops")
            },
            get monitors(){
                cy.contains("a","Monitors")
            }
            
        }


    }


         static product(product_name){
            return cy.contains("a",product_name)


        }
}











