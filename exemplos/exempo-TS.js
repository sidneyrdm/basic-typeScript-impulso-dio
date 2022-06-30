"use strict";
let button = document.getElementById('button');
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
function soma(numero1, numero2) {
    return numero1 + numero2;
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
    console.log(soma(Number(input1 === null || input1 === void 0 ? void 0 : input1.value), Number(input2 === null || input2 === void 0 ? void 0 : input2.value)));
});
