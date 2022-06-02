
function carregar() {
    debugger;
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = 20//data.getHours()

    msg.innerHTML = 'São ' + hora + ' horas'

    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src =  'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src =  'tarde.png'
        document.body.style.background = '#b9646f'
    }
    else{
        //boa noite
        img.src =  'noite.png' 
        document.body.style.background = '#515154'
    }
}
