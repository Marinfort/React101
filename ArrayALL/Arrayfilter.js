//const data = [ 10, 20 ,30 ,40] 

//const result = data.filter( e => {
 //   return e > 20
//})

//console.log(result)

const data = [
    {
        name: "Pun",
        salary: 200
    },
    {
        name: "kun",
        salary: 250
    },
    {
        name: "Un",
        salary: 400
    }

]

const R = data.filter( e =>{
    return e.salary>300
}).filter(e => e.name == "Un")

console.log(R)
