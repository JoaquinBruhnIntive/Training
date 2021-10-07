//1 str = "origin"
// eliminar las vocales del string
// output => rgn 

let str = "origin";

function ejercicio1(string){

    let resultado = string.split("");
    resultado = resultado.map(function(x){
        if((x=="a") || (x=="e")||(x=="i")||(x=="o")||(x=="u")){
            return x=""
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