function copiarTexto(idElemento) {
    var texto = document.getElementById(idElemento).innerText;

    var inputTemporario = document.createElement("input");
    inputTemporario.setAttribute("value", texto);
    document.body.appendChild(inputTemporario);

    inputTemporario.select();
    inputTemporario.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(inputTemporario);

    alert("Este texto foi copiado: " + texto);
}