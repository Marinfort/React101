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

data.reduce((value , i ) => {
    const total = i.salary + value
    console.log(total)
    return total
    
} , 0)