let ejercicio1 = "javascript";
ejercicio1 = ejercicio1[0].toUpperCase() + ejercicio1.slice(1);

console.log(ejercicio1)

let ejercicio2 = "javascript";
ejercicio2 = ejercicio2.slice(0,ejercicio2.length-1) + ejercicio2[ejercicio2.length-1].toUpperCase();

console.log(ejercicio2)


let ejercicio3 = "bar"
if( 0 != ejercicio3.length % 2){
    ejercicio3 = ejercicio3.slice(0,(ejercicio3.length/2)) + ejercicio3[Math.floor(ejercicio3.length/2)].toUpperCase() + ejercicio3.slice(ejercicio3.length/2 + 1)
    console.log(ejercicio3)
}
else{
    console.log(ejercicio3)
}

let ejercicio4 = ["foo", "bar", "baz", "qux", "origin"]

console.log(ejercicio4[2])
// ejercicio4 = ejercicio4.find((elem)=> {
//     return elem == "baz" 
// });

// console.log(ejercicio4)

let ejercicio5 = ["foo", "bar", "baz", "qux", "origin"] 
ejercicio5 = ejercicio5.splice(0,0)
console.log(ejercicio5)



funcion1("javascript")
funcion2("javascript")
funcion3("baz")
funcion4(["foo", "bar", "baz", "qux", "origin"])
funcion5(["foo", "bar", "baz", "qux", "origin"]) 

function funcion1(resultado){
    resultado = resultado[0].toUpperCase() + resultado.slice(1);

    return console.log(resultado)
}   

function funcion2(resultado){
    resultado = resultado.slice(0,resultado.length-1) + resultado[resultado.length-1].toUpperCase();

    return console.log(resultado)
}

function funcion3(resultado){
    if( 0 != resultado.length % 2){
        resultado = resultado.slice(0,(resultado.length/2)) + resultado[Math.floor(resultado.length/2)].toUpperCase() + resultado.slice(resultado.length/2 + 1)
        return console.log(resultado)
    }
    else{
        return console.log(resultado)
    }
}

function funcion4(resultado){
    
    return console.log(resultado[2])
    //resultado = resultado.find((elem)=> {
        //     return elem == "baz" 
        // });
        
        //return console.log(resultado)
}

function funcion5(resultado){ 
    resultado = resultado.splice(0,0)
    return console.log(resultado)
}