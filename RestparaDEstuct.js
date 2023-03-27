summa = (...numberArray) => {
    let total = 0
    for( let number of numberArray) total += number
    return total

}

summa2 = (...numberArray) => {
    let total = 0
    for( let i = 0 , len = numberArray.length; i < len; i++ ) {
        let number = numberArray[i]
        total  = total + number
    }

    return total

}

//Destructing
//const colors = ["R" ,"G", "B"]
//const [,b, c] = colors

const product ={
    Name : "computer",
    Cost : 1200,
    Stock : 10
}

const { Stock} = product

console.log(Stock)