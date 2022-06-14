function tabuada(){
    debugger;
    let num = window.document.querySelector('#textNumber')
    let tab = window.document.querySelector('#selTabuada')
    tab.innerHTML = null

    let valor = Number(num.value)

    if(valor <= 0 || valor > 10){
        
        window.alert('Por favor informe o número correto')

    }else{

        for(let c = 1; c <= 10; c++){
            let item = window.document.createElement('option')
           
            item.text = `${valor} x ${c} = ${valor * c}`
            tab.appendChild(item)
        }
    }

}