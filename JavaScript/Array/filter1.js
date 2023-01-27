const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true},
    { nome: 'ipad', preco: 4199, fragil: true},
    { nome: 'copo de vidro', preco: 12.49, fragil: true},
    { nome: 'copo de plastico', preco: 18.90, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))