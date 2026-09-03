    function abrirAba(evento, idAba) {
    // Esconde todas as divs de conteúdo
    const conteudos = document.querySelectorAll('.aba-conteudo');
    conteudos.forEach(conteudo => {
        conteudo.classList.remove('ativa');
    });

    // Remove o estado ativo de todos os botões
    const botoes = document.querySelectorAll('.aba-link');
    botoes.forEach(botao => {
        botao.classList.remove('ativa');
    });

    // Ativa a aba e o botão correspondente
    document.getElementById(idAba).classList.add('ativa');
    evento.currentTarget.classList.add('ativa');
    }