const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora de software'
}
const andre = {
    nome: 'Andre',
    idade: 30,
    profissao: 'desenvolvedor de software'
}
const paulo = {
    nome: 'Paulo',
    idade: 32,
    profissao: 'desenvolvedor de software'
}

enum Profissao {
    Professor,
    Ator,
    Desenvolvedor,
    JogadorFutebol
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa : Pessoa = {
    nome: 'Vanessa',
    idade: 27,
    profissao: Profissao.Desenvolvedor
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 19,
    profissao: Profissao.Desenvolvedor,
    materias: ['Matemática', 'Física', 'Álgebra']
}

function listar(lista: string[]){
    for(const item of lista){
        console.log('- ',item);
    }
}

listar(jessica.materias)