// nao aceita repetição/ nao indexada
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras')
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('palmeiras')
console.log(times.has('palmeiras'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)