// 6 arr = [1,3,4,2,6,7,9,1, 8]
// indicar el total de elementos impares
// output => 5

let arr = [1,3,4,2,6,7,9,1, 8];
var cantidad = 0

let newArray = arr.filter(x => 0 != x%2)
cantidad = newArray.length

console.log(cantidad)