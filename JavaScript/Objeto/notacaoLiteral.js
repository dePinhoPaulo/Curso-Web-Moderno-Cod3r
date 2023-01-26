const a = 1
const b = 2
const c = 3
const d = 4

const objt1 = {a: a, b: b, c: c, d: d}
const objt2 = {a,b,c,d}
console.log(objt1, objt2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const objt3 = {}
objt3[nomeAttr] = valorAttr
console.log(objt3)

const objt4 = {[nomeAttr]: valorAttr}
console.log(objt4)

const objt5 = {
    funcao1: function() {
        // ...
    },
    funcao2(){
        // ...
    }
}
console.log(objt5)