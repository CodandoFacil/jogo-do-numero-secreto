let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function Console() {
    console.log('O botão foi clicado');
}

function Alert() {
    alert('Eu amo JS');
}

function Bprompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function Bsoma() {
    let num1 = parseInt(prompt('Digite um número'));
    let num2 = parseInt(prompt('Digite outro número'));
    let soma = (num1 + num2);
    alert(`A soma entre ${num1} e ${num2} é ${soma}`);
}