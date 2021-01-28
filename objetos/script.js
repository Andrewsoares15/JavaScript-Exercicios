// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var eu = {
    nome: 'andrew',
    sobrenome: 'Fialho',
    idade: 18,
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`
    }
    
}
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    verHomem(viu){
        if(viu === true){
            return "AU AU AU AU AU"
        }
        else{
            return "Tudo Calmo"
        }
    }
}


// Minha Praticas
  
var pessoa = {
    nome: 'Andrew',
    idade: 18,
    profissao: 'estudante',
    namorada: 'gaby'
};
console.log(pessoa.nome, pessoa.idade, pessoa.profissao);

var quadrado = {
    lados: 4,
    area: function(lado){
       return lado * lado;
    },
    perimetro(lado){
        return this.lados * lado;
    },
}
console.log(quadrado.perimetro(5))
console.log(quadrado.area(5))
console.table(pessoa)
console.log(Math.PI, Math.random())

heigth = 120;
var menu = {
    width: 900,
    heigth: 40,
    backgroundColor: '#000',
    metade: function(){
        return this.heigth 
    }
}
menu.pessoa = 'andrew'

menu.color = 'blue' // adicionando propriedades
menu.backgroundColor = '#fff'
var bg= menu.backgroundColor;
menu.metade = function() {
    return this.heigth / 2
}