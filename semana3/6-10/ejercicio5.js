// 5 arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
//   eliminar los elementos repetidos, nota: (el segundo elemento repetido) 
//   output => [2, 4, 7, 1,  "foo", "bar", "qux", 3]

let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];


let arr2 = [1, 2, 3, 4]

let newArray = [];

newArray = newArray.filter(unicos)

console.log(newArray)

function unicos(x){
    if(newArray.indexOf(x)<0){
        return x
    }
}