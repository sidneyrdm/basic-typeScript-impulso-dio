
function printaValores(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

function somaNumerosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function quadrado(numero: number): number {
    return numero * numero;
}

console.log(somaNumerosETratar(1, 5, quadrado));
