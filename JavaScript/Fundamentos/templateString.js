const nome = 'maria';
const concatenacao = 'Ola '+nome+'!';
// não é aspas simples usado no template e sim bakchic(crase ``)
const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template);

//expressões
console.log(`1+1=${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`ei... ${up('cuidado')}!`);