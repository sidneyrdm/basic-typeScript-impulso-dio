"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora de software'
};
const andre = {
    nome: 'Andre',
    idade: 30,
    profissao: 'desenvolvedor de software'
};
const paulo = {
    nome: 'Paulo',
    idade: 32,
    profissao: 'desenvolvedor de software'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["JogadorFutebol"] = 3] = "JogadorFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 27,
    profissao: Profissao.Desenvolvedor
};
const jessica = {
    nome: 'Jessica',
    idade: 19,
    profissao: Profissao.Desenvolvedor,
    materias: ['Matemática', 'Física', 'Álgebra']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materias);
