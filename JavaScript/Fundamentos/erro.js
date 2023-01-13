function tratarErroELancar(erro){
    throw new Error('...')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCaser() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)