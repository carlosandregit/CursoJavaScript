let valores = [1,8,7,5,6,9]
valores.sort()

// for(let valor = 0; valor < valores.length; valor++){
//     console.log('Aposição ' + valor + ' o valor ' + valores[valor])
// }

//outra forma de fazer
for(let valor in valores){
    console.log('Aposição ' + valor + ' contem valor ' + valores[valor])
}