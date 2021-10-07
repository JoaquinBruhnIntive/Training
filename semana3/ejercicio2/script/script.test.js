const { expect } = require("@jest/globals");

let arr = ["foo", "bar", "baz", "qux", "origin"]

function funcion1(resultado){
    resultado = resultado[0].toUpperCase() + resultado.slice(1);

    return resultado
}

function funcion2(resultado){
    resultado = resultado.slice(0,resultado.length-1) + resultado[resultado.length-1].toUpperCase();

    return resultado
}

function funcion3(resultado){
    if( 0 != resultado.length % 2){
        resultado = resultado.slice(0,(resultado.length/2)) + resultado[Math.floor(resultado.length/2)].toUpperCase() + resultado.slice(resultado.length/2 + 1)
        return resultado
    }
    else{
        return resultado
    }
}

function funcion4(resultado){
    
    // return resultado[2]
    resultado = resultado.find((elem)=> {
            return elem == "baz" 
        });
        
        return resultado
}

function funcion5(resultado){ 
    resultado = resultado.splice(0,0)
    return resultado.length
}

test('upper the first letter', () => {
    expect(funcion1("str")).toBe("Str");
});

test('upper the last letter', () => {
    expect(funcion2("str")).toBe("stR");
});

test('upper the middle letter', () => {
    expect(funcion3("javascripts")).toBe("javasCripts");
});

test('find the element baz', () => {
    expect(funcion4(arr)).toBe("baz");
});

test('empty array', () => {
  expect(funcion5(arr)).toBe(0);
});


