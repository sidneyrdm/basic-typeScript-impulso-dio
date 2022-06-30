"use strict";
function printaValores(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somaNumerosETratar(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function quadrado(numero) {
    return numero * numero;
}
console.log(somaNumerosETratar(1, 5, quadrado));
