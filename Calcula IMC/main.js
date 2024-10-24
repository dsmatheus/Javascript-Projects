const escopoGlobal = () => {
    const form = document.querySelector('#input_dados')
    
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const campoPeso = e.target.querySelector('#campoPeso')
        const campoAltura = e.target.querySelector('#campoAltura')
        
        const peso = Number(campoPeso.value)
        const altura = Number(campoAltura.value)

        if(!peso && !altura) {
            setResultado('Insira os valores do Peso e Altura!', false)
            return;
        }
        if(!peso) {
            setResultado('Insira o Peso!', false)
            return;
        }
        if(!altura) {
            setResultado('Insira a Altura!', false)
            return;
        }

        const imc = getIMC(peso, altura)
        const nivelIMC = getNivelIMC(imc)
        const msg = `IMC: ${imc} - ${nivelIMC}.`

        setResultado(msg, true)
    });

    const getIMC = (peso, altura) => {
        const imc = peso / (altura * altura) * 10000
        return imc.toFixed(2)
    }
    
    const getNivelIMC = (imc) => {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 
            'Obesidade grau 2', 'Obesidade grau 3']

        if (imc >= 39.9) return nivel[5]
        if (imc >= 34.9) return nivel[4]
        if (imc >= 29.9) return nivel[3]
        if (imc >= 24.9) return nivel[2]
        if (imc >= 18.5) return nivel[1]
        if (imc < 18.5) return nivel[0]
    }

    const criaP = () => {
        const p = document.createElement('p')
        return p;
    }

    const setResultado = (msg, isValid) => {
        const resultado = document.querySelector('#resultado')
        resultado.innerHTML = '';        

        const p = criaP()

        if (isValid) {
            p.classList.add('paragrafo-resultado')
        } else {
            p.classList.add('bad')
        }
        p.innerHTML = msg
        resultado.appendChild(p)
    }
}
escopoGlobal()
