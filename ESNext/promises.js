function falarDepoisde(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisde(3, 'qUE LEGAL')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))