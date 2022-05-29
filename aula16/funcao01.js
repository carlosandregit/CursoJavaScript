function parImpar(n) {
    if (n % 2 == 0) {
        return 'Número ' + n + ' é PAR'
    } else {
        return 'Número ' + n + ' é sIMPAR'
    }
}

let result = parImpar(19)
console.log(result)