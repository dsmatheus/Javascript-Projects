const numRecebido = Number(prompt('Digite um numero'))

const numeroTitulo = document.getElementById('numero-titulo')
const divTexto = document.getElementById('texto')

numeroTitulo.innerHTML = numRecebido

divTexto.innerHTML = '';
divTexto.innerHTML += `<p>Raiz quadrada: ${numRecebido ** 0.5}</p>`

// Valida se o número é ou não inteiro
if (Number.isInteger(numRecebido) === true) {
    divTexto.innerHTML += `<p>${numRecebido} é um número inteiro</p>`
} else {
    divTexto.innerHTML += `<p>${numRecebido} não é um numero intero.</p>`
}

// Valida se é ou não um NaN
if (Number.isNaN(numRecebido) === true) {
    divTexto.innerHTML += `<p>${numRecebido} é um NaN.</p>`
} else {
    divTexto.innerHTML += `<p>${numRecebido} não é um NaN.</p>`
}

divTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numRecebido)}</p>`
divTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numRecebido)}</p>`
divTexto.innerHTML += `<p>Com duas casas decimais: ${numRecebido.toFixed(2)}</p>`


/*
document.body.innerHTML += `Seu numero é: ${numRecebido} <br />`
document.body.innerHTML += `Raiz quadrada: ${numRecebido ** 0.5} <br />`
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numRecebido)} <br />`
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numRecebido)} <br />`
document.body.innerHTML += `Com duas casas decimais: ${numRecebido.toFixed(2)} <br />`
*/
