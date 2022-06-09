function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let AnoDigitado = window.document.getElementById('textAno')
    let resImg = window.document.querySelector('#respImg')
    let resp = window.document.querySelector('#resp')
    let resText = window.document.querySelector('#resText')

    if (AnoDigitado.value > ano || AnoDigitado.value.length < 4) {
        window.alert('[ERRO] Dados inválidos')
    } else {

        let sex = document.getElementsByName('radSex')
        let idade = ano - Number(AnoDigitado.value)
        let genero = ''

        let img = document.createElement('img')//criando o elemento dinamicamente
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = 'Homem'

            if (idade > 1 && idade <= 10) {
                //criança
                img.setAttribute('src', 'foto-h-crianca.png')
            } else if (idade <= 20) {
                //adolescente
                img.setAttribute('src', 'foto-h-adolescente.png')
            } else if (idade <= 45) {
                //homem 
                img.setAttribute('src', 'foto-homem.png')
            } else if (idade < 59) {
                //homem maduro
                img.setAttribute('src', 'foto-h-maduro.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-h-idoso.png')
            }

        } else {
            genero = 'Mulher'

            if (idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'foto-m-crianca.png')
            } else if (idade <= 20) {
                //adolescente
                img.setAttribute('src', 'foto-m-adolescente.png')
            } else if (idade <= 45) {
                //mulher 
                img.setAttribute('src', 'foto-mulher.png')
            } else if (idade < 59) {
                //mulher madura
                img.setAttribute('src', 'foto-m-madura.png')
            } else {
                //idosa
                img.setAttribute('src', 'foto-m-idosa.png')
            }
        }

        resText.innerHTML = 'Detectamos ' + genero + ' com idade ' + idade
        resImg.appendChild(img)

    }

}

function limpar() {

    let AnoDigi = window.document.getElementById('textAno')
    AnoDigi.value = null

    let img = window.document.querySelector('#respImg')   
    img.innerHTML = null

    resText.innerHTML = null

}

