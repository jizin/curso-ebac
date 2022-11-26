const numeroUm = document.getElementById('primeiro-numero')
const numeroDois = document.getElementById('segundo-numero')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()

    function numeroMaior(numeroUm, numeroDois) {
        return numeroDois.valueAsNumber > numeroUm.valueAsNumber
    }
        
        if (numeroMaior(numeroDois, numeroUm)) {
            document.querySelector('.mensagem-erro').style.display = 'block'
            
        } else {
            const mensagemSucesso = `Sim, o segundo número é maior que o primeiro.`
            const containerMensagemSucesso = document.querySelector('.mensagem-sucesso')
            containerMensagemSucesso.innerHTML = mensagemSucesso
            containerMensagemSucesso.style.display = 'block'
        }
})