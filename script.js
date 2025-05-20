
const botao = document.getElementById('botao');
    const mensagemDiv = document.createElement('div');
    mensagemDiv.id = 'mensagem-motivacional';
    
    botao.insertAdjacentElement('afterend', mensagemDiv);

    const mensagens = [
        "O sucesso começa com a vontade de tentar.",
    ];

    botao.addEventListener('click', function() {
        
        mensagemDiv.textContent = mensagemDiv;
        mensagemDiv.style.display = 'block';
    })
