const prod1 = {};
prod1.nome = 'Celuar Ultra';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; //evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa',
    preco: 19.90,
    obj: {
        blabla: 1,
    }
};

console.log(prod2);