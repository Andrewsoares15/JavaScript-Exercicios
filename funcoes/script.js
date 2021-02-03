<<<<<<< HEAD
// Verificar se uma pessoa é maior de idade ou não.
function idade(valor){
    if(typeof valor !== 'number'){
        return 'Digite um número válido'
    }
    else if(valor < 18){
        return 'Você não é maior de idade'
    }
    else{
        return 'Você é maior de idade'
    }
}
console.log(idade(6))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener("click", function(){
    console.log("para de clicar mlk")
})
// Crie uma função dentro da outra, com uma variável mudando de valor na segunda fuction
function dados(){
    var nome = 'andrew';
    var idade = '17';
    function outrosDados(){
        var idade = '18';
        var cidade = 'Rio de Janeiro';
        var profissão = 'estudante';
        
        return `${nome}, ${idade} "anos", ${cidade}, ${profissão} `
    }
    return outrosDados()
}

console.log(dados())


// Crie uma função para verificar se um valor é Truthy
function verificar(num){
    return !!num
}
console.log(verificar(''))
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(dado){
    return dado * 4
}
console.log(perimetro(10))
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `me chamo, ${nome} ${sobrenome}`
}
console.log(nomeCompleto('andrew', 'gaby'))
// Crie uma função que verifica se um número é par
function par(num){
    if(num % 2 === 0){
        return `O número ${num} é par`
    }else{
        return `O número ${num}é ímpar`
    }
}
console.log(par(254))
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(num){
    return (typeof num)
}
console.log(tipo(''))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log('PARA COM ISSO SEU MLK')
})


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
 console.log( precisoVisitar(30));
  console.log(jaVisitei(20));
  
//#Faça um programa que verifique se um valor inteiro digitado pelo usuário
///#é positivo, negativo ou igual a zero.
var num = 5;
function valor(numero){
    if(numero >= 1){
        return "É positivo"
    } else if(numero < 0){
        return "É negativo"
    }else{
        return "É igual a zero"
    }
}
//Criar uma função que receba um caractere como
//parâmetro e retorne uma mensagem informando se
//o caracter digitado é uma vogal ou uma consoante.
var letra = 'and';
function consoante(le){
    if(le !==  'a' && le !== 'e' && le !== 'i' && le !== 'o' && le !== 'u'){
        return "É consoante"
    }
    else{
        return "é vogal"
    }
