function somarNumeros() {
    // Obter os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)

    // Verifica se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, digite os valores numéricos.')
        return;
    }

    // Realiza a soma
    let resultado = num1 + num2

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

function multipNumeros(){
    // Obter os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)

    // Verifica se os valores são números
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, digite os valores numéricos.')
        return;
    }

    // Realiza a multiplicação
    let resultado = num1 * num2

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;

}



/*
const inputNumero1 = Number(document.getElementById('insertNum1'))
const inputNumero2 = Number(document.getElementById('insertNum2'))

const btnCalcular = document.getElementById('sbmCalcular')

function enviaCalculo() {
    num1 = inputNumero1
    num2 = inputNumero2
    let resultado1 = num1 + num2;
    pResult.innerHTML += resultado1
}

btnCalcular.addEventListener('click', enviaCalculo);

const pResult = document.getElementById('pResultado')
*/
