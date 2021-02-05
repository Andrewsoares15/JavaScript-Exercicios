// Retorne o url da página atual utilizando o objeto window
const Locali = window.location.href;
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const Seleciona = document.querySelector('.ativo'); //querySelectorAll seleciona todosos elementos com a classe
// Retorne a linguagem do navegador
const linguagem = navigator.language;
// Retorne a largura da janela 
const largura = innerWidth;

// ================== Minha prática
const h1Selicionado = document.querySelector('h1');
const classesSelecionada = h1Selicionado.classList;
console.log(classesSelecionada)

h1Selicionado.addEventListener('click', function(){
    console.log("Ciclou")
})
function call(){
    console.log("Clicou aqui poxa")
}
h1Selicionado.addEventListener('click', call)

/*4 diferentes de selecionar o elementos */

const animais = document.getElementById('animais')
console.log(animais)

const animais1 = document.getElementsByClassName('grid-section');
console.log(animais1[0])

const animais3 = document.getElementsByTagName('section')
console.log(animais3[0])

const animais4 = document.querySelector('.animais')
console.log(animais4)

/* ===================== */
const todosUl =  document.querySelectorAll('ul') // Selecionando todos os Ul do Site
console.log(todosUl)

const ultimaLi = document.querySelector('.menu li:last-child') // Selecioando a última li dentro da class menu
console.log(ultimaLi)

const linkInterno = document.querySelector('[href^="#"]') // selecionando Link interno da página
console.log(linkInterno)

const animaisImg = document.querySelectorAll('#animais img') // Selecionando todas as imagens dentro do id animais
console.log(animaisImg[5])