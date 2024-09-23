//Criado uma const para receber o valor de img
const myImage = document.querySelector('img');
//Criado uma função de click
myImage.onclick = () => {
    //recebe o caminho da imagem
    const mySrc = myImage.getAttribute('src');
    //valida a condição do click
    if (mySrc === 'img/web1.png') {
        myImage.setAttribute('src', 'img/firefox-icon.png')
    } else {
        myImage.setAttribute('src', 'img/web1.png')
    }
}

document.querySelector('h1').addEventListener('click', () => {
    alert('Aí! Pare de me cutucar')
});

//Criado uma const para receber o valor de h1
const myHeading = document.querySelector('h1')
//Valor de h1 alterado para 'Olá mundo'
myHeading.textContent = 'Olá mundo!'

const myButton = document.querySelector('button')

function setUserName() {
    //criado uma const para receber a entrada de dados
    const myName = prompt('Por favor, digite seu nome');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent(`Mozilla é legal, ${myName}`);
    }
}

//nessa linha é feito a verificação se o nome já está cadastrado, se não, ele cadastra
if (!localStorage.getItem('name')) {
    setUserName();
  //aqui ele imprime o nome já cadastrado anteriormente
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}

//Verifica uma condição no console Node
let iceCream = 'Chocolate'
if (iceCream !== 'Chocolate') {
    console.log('Eu amo sorvete de chocolate')
} else {
    console.log('Ahhh, mas chocolate é meu favorito')
}

function multiply(num1, num2) {
    const result1 = num1 * num2;
    console.log(result1)
    return result1
}

multiply(4, 6)
multiply(2, 5)
multiply(10, 2)
