function Contador() {

    const primNu = window.document.querySelector('#priNum')
    const segmNu = window.document.querySelector('#segNum')
    const pass = window.document.querySelector('#valorPasso')
    let texto = window.document.querySelector('#text')

    if (primNu.value.length == 0 || primNu.value == 0 || segmNu.value.length == 0 || segmNu.value == 0 || pass.value.length == 0 || pass.value == 0) {
        window.alert('Preencha todos os campos!')
    } else {

        texto.innerHTML = 'contando : '
        let i = Number(primNu.value)
        let f = Number(segmNu.value)
        let p = Number(pass.value)

        if (i <= 0 || f <= 0 || p <= 0) {
            window.alert('Valores negativos não podem ser usados!')

        } else {
            if (i < f) {
                //contagem crescente
                for (let c = i; c <= f; c += p) {
                    texto.innerHTML += ` ${c} \u{1f449}`
                }

            } else {
                //contagem regressiva
                for (let c = i; c >= f; c -= p) {
                    texto.innerHTML += ` ${c} \u{1f449}`
                }
            }
            texto.innerHTML += `\u{1F3C1}`
        }

    }

}