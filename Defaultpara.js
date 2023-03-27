getDataCustomer =( CN , CA) =>{
    if (!CA){
        CA ="BANGKOK "
    }
    const Address = `Name: ${CN}
Address: ${CA}`
    return Address
}

console.log(getDataCustomer("PUN" , ))