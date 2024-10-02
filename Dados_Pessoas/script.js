const escopoGlobal = () => {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const dadoPessoa = []

    const recebeEvento = (evento) => {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const idade = form.querySelector('.idade')
        const cidade = form.querySelector('.cidade')

        dadoPessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            cidade: cidade.value
        });

        resultado.innerHTML += `<p>Nome: ${nome.value}</br> Sobrenome: ${sobrenome.value}</br>` + 
        `Idade: ${idade.value}</br> Cidade: ${cidade.value}</p>`
    }
    
    form.addEventListener('submit', recebeEvento)
}
escopoGlobal()
