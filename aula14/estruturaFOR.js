let pizza = 8
for(let i = 1; i <= pizza; i++){
    console.log('Você pegou ' + i + ' fatia')

    if(i == 2){
        console.log('Você come pouco ' + i + ' fatias')

    }
    else if(i == 4){
        console.log('Você come bem ' + i + ' fatias')
    }
    else if(i >= 5){
        console.log('Você come muito ' + i + ' fatias')
    }      
}
console.log('Vixe, acabou a pizza')