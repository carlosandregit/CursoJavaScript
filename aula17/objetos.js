let pessoa = {
    nome: 'Carlos',
    idade: 28,
    sexo: 'M',
    peso: 89.80,
    //posso usar uma função dentro do objeto
    engordar(p=0){
        console.log('engordou')
        this.peso += p
    }
}
pessoa.engordar(2) // variavel com funcionalidade
console.log('meu nome é ' + pessoa.nome, 'e minha idade é ' + pessoa.idade, 'e meu peso ' + pessoa.peso)