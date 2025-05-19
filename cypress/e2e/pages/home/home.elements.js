export class HomeElements{



      static get categories(){
        return{
            get phones(){
                return cy.contains("a","Phones")
            },
            get laptops(){
                 return cy.contains("a","Laptops")
            },
            get monitors(){
                 return cy.contains("a","Monitors")
            }
        }
    }
         static product(product_name){
            return cy.contains("a",product_name)
        }



      
}
