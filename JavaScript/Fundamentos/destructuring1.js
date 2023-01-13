// novo recurso do ES2015

const pessoa = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua jose',
        numero: 123
    }
};

const { nome, idade} = pessoa;

console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log(n, i);

const { sobrenome, bemHimorada = true} = pessoa;
console.log(sobrenome, bemHimorada);
