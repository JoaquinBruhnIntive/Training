// 4 arr = [10, "20", 30, "40", 50]
// verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
// a number
// output => [10, 20, 30, 40, 50]

let arr = [10, "20", 30, "40", 50];

let resultado = arr.map(function(x){
    return parseInt(x)
})
console.log(resultado)