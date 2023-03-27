// splice 
// slice
const data = [ 10 ,20 , 30 ,40 ,50 ]

let lastdata = data.slice(1,3) //= ได้ index 1 กับ 3
data.splice(1,3) //= ลบออกตั้งแต่ index 1 ไป 3 ตัว รวมตำแหน่ง 1 ด้วย
console.log(data)
console.log(lastdata)