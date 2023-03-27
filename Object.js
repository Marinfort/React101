const N = "Ben"
const age = 14
const Ad = "CH"


const customer = {
    customerN : N,
    age : age ,
    Address : Ad,
    showDT(){
        console.log("Name = "  + N)
    }
}


const customer2 = {N , age , Ad, 
    showDT(){
    console.log("Name = "  + N)
}}
//console.log(customer2);
customer2.showDT()