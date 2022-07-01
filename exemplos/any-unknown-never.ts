let anyEstaDeVolta: any;

anyEstaDeVolta = true;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 75;

let unknownValue: unknown;

unknownValue = true;
unknownValue = 75;
unknownValue = 'teste';

let stringTeste= 'eu sou uma String';

if(typeof unknownValue === 'string'){
    stringTeste = unknownValue;
}

function jogaErro(erro: string, codigo: number): never {
    throw {error: erro, code: codigo};
}

jogaErro('deu erro', 500);

