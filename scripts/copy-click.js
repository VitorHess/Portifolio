function copiarTexto(idElemento) {
    var texto = document.getElementById(idElemento).innerText.trim();

    navigator.clipboard.writeText(texto)
        .then(function() {
            mostrarNotificacao("Texto copiado com sucesso", texto);
        })
        .catch(function(err) {
            console.error('Erro ao copiar texto: ', err);
        });
}

function mostrarNotificacao(titulo, mensagem) {
    var divNotificacao = document.createElement("div");
    divNotificacao.classList.add("alert", "alert-success", "custom-alert");
    divNotificacao.innerHTML = `<strong>${titulo}</strong><br>${mensagem}`;

    document.body.appendChild(divNotificacao);

    setTimeout(function() {
        divNotificacao.remove();
    }, 16000);
}