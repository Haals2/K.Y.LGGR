let input = document.querySelector('input');
let botao = document.querySelector('button');

input.addEventListener('keyup',(event) => {
    console.log(event.key);
});


function sendMessage(text) {

let cleaningTextTheInput = text.trim().toLowerCase();

if(cleaningTextTheInput.length > 0) {
    console.log("O usuário digitou: " + cleaningTextTheInput);
    clearInput();
    }
}

function clearInput() {
    cleaningTextTheInput = '';
    input.value = '';
    input.focus();
}

input.addEventListener('keyup', (event) => {
    if(event.key === 'Enter') {
        sendMessage(input.value);
    }
});