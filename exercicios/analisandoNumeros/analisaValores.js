let num = window.document.querySelector('#textAnalisa')
let lista = window.document.querySelector('#selectContador')
let res = window.document.querySelector('#res')
let valores = []
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 200) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function Adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
}
function Finalizar() {
    if (valores.length == 0) {
        window.alert('É preciso adicionar valores para finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números</p>`
        res.innerHTML += `<p>Maior valor informado ${maior}</p>`
        res.innerHTML += `<p>Menor valor informado ${menor}</p>`
        res.innerHTML += `<p>Soma dos valores ${soma}</p>`
        res.innerHTML += `<p>Media dos valores ${Math.round(media)}</p>`
    }
}
function Limpar() {
    lista.innerHTML = null
    valores = []
    res.innerHTML = ''
}