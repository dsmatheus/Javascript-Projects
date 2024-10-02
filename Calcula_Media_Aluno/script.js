const escopoGlobal = () => {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const aluno = []

    const recebeMedia = (evento) => {
        evento.preventDefault();
        const nomeAluno = form.querySelector('.nome')
        const notaUm = form.querySelector('.notaUm')
        const notaDois = form.querySelector('.notaDois')

        aluno.push({
            nomeAluno: nomeAluno.value,
            notaUm: notaUm.value,
            notaDois: notaDois.value
        })

        mediaNota = (parseFloat(notaUm.value) + parseFloat(notaDois.value)) / 2;
        resultado.innerHTML += `<p>Aluno: ${nomeAluno.value}</br>` +  
        `As notas informadas são: ${notaUm.value} e ${notaDois.value}</br>` + 
        `Média do aluno: ${mediaNota}</p>`

        if(mediaNota >= 6){
            resultado.innerHTML += `<p>Aluno está aprovado</p>`
        }else {
            resultado.innerHTML += `<p>Aluno está reprovado</p>`
        }
    }

    form.addEventListener('submit', recebeMedia)
}
escopoGlobal()
