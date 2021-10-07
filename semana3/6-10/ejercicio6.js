// 6 arr = [1,3,4,2,6,7,9,1, 8]
// indicar el total de elementos impares
// output => 5

let arr = [1,3,4,2,6,7,9,1, 8];
var cantidad = 0

arr.map(function(x){
    if(0 != x%2){
        return cantidad + 1
    }
})

console.log(cantidad)