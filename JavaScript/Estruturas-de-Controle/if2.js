function teste1 (num){
    if(num > 7){
        console.log(num)
        console.log('Final')
    }
}

//teste1(6)
//teste1(8)

function teste1 (num){
    if(num > 7);{ // CUIDADO com o ';', em estruturas de controle
        console.log(num)
    }
}

teste1(6)
teste1(8)
