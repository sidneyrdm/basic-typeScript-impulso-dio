let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function soma(numero1: number, numero2: number) {
    return numero1 + numero2;
}

button?.addEventListener('click', () => {
    console.log(soma(Number(input1?.value), Number(input2?.value)));

})