const log = console.log;
var lista = [4,5,1,3,6,7,9,0,3]; // total de numeros pares e impares
var lista = [4,5,1,3,6,7,9,0,3]; // total de veces del numero 3
var lista = [4,5,1,3,6,7,9,0,3]; // buscar si existe un numer n en el array

let par = 0
let inpar = 0
let i = 0
let respuesta

function numerosPI(v) {
    
    if(v.length > i){
        if(v[i] % 2 == 0){
            par = par +1
        }
        i = i+1
        return numerosPI(v)
    }
    else{
        inpar = v.length - par
        return respuesta = "numeros pares: " + par + " numeros inpares: " + inpar;
    }
}

log(numerosPI(lista));

/*-----------------------------------------------------------------------------------------*/ 


let cant = 0 
let x = 0

function veces3(v,num){
    
    if(v.length > x){
        if(v[x] === num){
            cant++
        }
        x = x+1
        return veces3(v, num)
    }
    else{
        return "el " + num + " se repite " + cant + " veces"
    }
    
}
log(veces3(lista,3))

/*-----------------------------------------------------------------*/

let y = 0

function present(v,num){
    
    if(v.length > y){
        if(v[y] === num){
            return "el numero " + num + " existe"
        }
        y = y+1
        return present(v, num)
    }
    else{
        return "el numero " + num + " no existe."
    }
    
}
log(present(lista,3))
