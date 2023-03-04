// Variáveis
const menuIcon = document.querySelector('.menu__icon');
const nav = document.querySelector('nav');
const projeto = document.querySelector('.projeto-link');
const contatoLink = document.querySelector('.contato-link');
const text2 = document.querySelector('.text__projects');

// Esconde o menu quando o site inicia
nav.style.display = 'none';

// Função para esconder o menu
function hideNav() {
  nav.style.display = 'none';
}

// Evento de clique no ícone de menu
menuIcon.addEventListener('click', function() {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Evento de clique no link "Projeto"
projeto.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: text2.offsetTop, behavior: 'smooth' });
    hideNav();
});

// Evento de clique no link "Contato"
contatoLink.addEventListener('click', function(event) {
  event.preventDefault();
  const footer = document.querySelector('footer');
  footer.scrollIntoView({ behavior: 'smooth' });
  hideNav();
});

// Evento de clique fora do menu
document.addEventListener('click', function(event) {
  if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
    hideNav();
  }
});

// Evento de rolagem da página
window.addEventListener('scroll', function() {
  hideNav();
});
