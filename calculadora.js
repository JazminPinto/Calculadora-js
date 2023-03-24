const exibicao = document.querySelector('#exibicao');
const botoes = document.querySelectorAll('button');

botoes.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear') {
            exibicao.innerText = '';
        }else if (item.id == 'backspace') {
            let string = exibicao.innerText.toString();
            exibicao.innerText = string.substr(0, string.length - 1);
        }else if(exibicao.innerText != '' && item.id == 'igual'){
            exibicao.innerText = eval(exibicao.innerText);
        }else if (exibicao.innerText == '' && item.id == 'igual'){
            exibicao.innerText = 'Empty!';
            setTimeout(() => (exibicao.innerText = '' ), 2000);
        }else { 
            exibicao.innerText += item.id;
        }
    }
})

const alternadorTemaBtn = document.querySelector('.alternador-de-tema');
const calculador = document.querySelector('.calculador');
const alternadorIcon = document.querySelector('.alternador-icon');
let isDark = true;

alternadorTemaBtn.onclick = () => {
    calculador.classList.toggle('oscuro');
    alternadorTemaBtn.classList.toggle('active');
    isDark = !isDark;
}
