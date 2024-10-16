function chamarImagens() {

    let resUsuario = prompt("Escolha um número de 3 a 10:");
    resUsuario = Number(resUsuario);

    //Imagem
    if (resUsuario => 3 &&  resUsuario <= 10) {
        let forma = document.getElementById(resUsuario);
        forma.style.display = "block";
    } else {
        
    }

    //Nome da forma
    let formulaArea = document.getElementById("formulaArea");
    let formulaPerimetro  = document.getElementById("formulaPerimetro");
    let nomeForma = document.getElementById("nomeFormaGeometrica");
 
    switch (resUsuario) {
        case 3:
        formulaArea.innerText = "area = (b*h)/2";
        formulaPerimetro.innerText = "perimetro: 3*L";
        nomeForma.innerText= "Triângulo";
            break;
        case 4:
            formulaArea.innerText = "area = b*h ";
            formulaPerimetro.innerText = "perimetro = 4*L";
            nomeForma.innerText= "Quadrado";
            
            break;
        
        case 5:
            formulaArea.innerText = "area = 5L*a";
            formulaPerimetro.innerText = "perimetro = 5*L";
            nomeForma.innerText= "Pentágono";
            
            break;
        
        case 6:
            formulaArea.innerText = "area = (3L^2)";
            formulaPerimetro.innerText = "perimetro = 6*L";
            nomeForma.innerText= "Hexágono";
        
            
            break;
        
        case 7:
            formulaArea.innerText = "area = (7/2)La";
            formulaPerimetro.innerText = "perimetro = 7*L";
            nomeForma.innerText= "Heptagono";
            
            break;
        
        case 8:
            formulaArea.innerText = "area = 4La";
            formulaPerimetro.innerText = "perimetro = *a";
            nomeForma.innerText= "Octogono";
            
            break;
        
        case 9:
            formulaArea.innerText = "area = (p*a)/2";
            formulaPerimetro.innerText = "perimetro = 9*a";
            nomeForma.innerText= "Eneagono";
            
            break;
        case 10:
            formulaArea.innerText = "area = (p*a)/2";
            formulaPerimetro.innerText = "perimetro = 10*a";
            nomeForma.innerText= "Decagono";
            
            break;
        

    
        default:
            break;
    }
}

chamarImagens();