let horas = new Date()
let horaAtual = horas.getHours()
console.log("Atualmente são "+horaAtual+'hrs')
if(horas < 12){
    console.log('Bom dia!')
}
else if(horas <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}