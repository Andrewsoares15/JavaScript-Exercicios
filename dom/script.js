// Retorne o url da página atual utilizando o objeto window
const Locali = window.location.href;
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const Seleciona = document.querySelectorAll('.ativo'); //querySelectorAll seleciona todosos elementos com a classe
// Retorne a linguagem do navegador
const linguagem = navigator.language;
// Retorne a largura da janela 
const largura = innerWidth;

// ================== Minha prática
const classesSelecionada = h1Selicionado.classList;


const h1Selicionado = document.querySelector('h1')
function callh1(){
    console.log('clicou em', h1Selicionado.innerHTML)
}

h1Selicionado.addEventListener('click', callh1)



