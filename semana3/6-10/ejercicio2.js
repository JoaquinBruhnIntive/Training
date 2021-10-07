// 2 str = "origin"
//   cambiar las vocales por el numero 1 
//   output => 1r1g1n

let str = "origin";

function ejercicio1(string){

    let resultado = string.split("");
    resultado = resultado.map(function(x){
        if((x=="a") || (x=="e")||(x=="i")||(x=="o")||(x=="u")){
            return x=1
        }
        else{
            return x
        }
    })
    resultado = resultado.join("");
    return resultado
}
console.log(ejercicio1(str))
console.log(typeof ejercicio1(str))
