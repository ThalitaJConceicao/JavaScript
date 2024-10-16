function chamarImagens() {

    let resUsuario = prompt("Escolha um número de 3 a 10:");
    resUsuario = Number(resUsuario);

    //Imagem
    if (resUsuario => 3 &&  resUsuario <= 10) {
        let forma = document.getElementById(resUsuario);
        forma.style.display = "block";
    } else {
        alert("Você deve escolher um número de 3 a 10 para o programa funcionar.");
    }
}

chamarImagens();