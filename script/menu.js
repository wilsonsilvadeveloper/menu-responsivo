var botao = document.querySelector('#botao-menu');
var navbar = document.querySelector('#navbar');
var abreOuFecha = true;
var largura;

function descobreLargura() {
    largura = window.innerWidth;
}

botao.onclick = () =>  {
    if(largura <= 999) {
        if(abreOuFecha) {
            navbar.style.display = 'flex';
            abreOuFecha = false;
        } else if(!abreOuFecha) {
            navbar.style.display = 'none';
            abreOuFecha = true;
        }
    }
    
    
    return false;
}

function mostraNavBar() {
    if(largura > 999) {
        navbar.style.display = '';
    }
}

setInterval(descobreLargura, 500)
setInterval(mostraNavBar, 500);