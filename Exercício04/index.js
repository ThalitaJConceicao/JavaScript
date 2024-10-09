function FormasGeométricas(numero) {
    if(numero === 3){
        console.log("Forma: Triângulo Equilátero")
        console.log("Área: A = (b*h)/2")
        console.log("Perímetro: 3*L")
    }else if(numero === 4){
        console.log("Forma: Quadrado")
        console.log("Área: A = b*h")
        console.log("Perímetro: 4*L")
    }else if (numero === 5){
        console.log("Forma: Pentágono")
        console.log("Área: A = 5L*a")
        console.log("Perímetro: P = 5*a")
    }else if (numero === 6){
        console.log("Forma: Hexágono")
        console.log("Área: A = (3L^2)()")
        console.log("Perímetro: P = 6*a")
    }else if (numero === 7){
        console.log("Forma: Heptágono")
        console.log("Área: A = (7/2)La")
        console.log("Perímetro: P = 7*a")
    }else if (numero === 8){
        console.log("Forma: Octógono")
        console.log("Área: A = 4La")
        console.log("Perímetro: P = 8*a")
    }else if (numero === 9){
        console.log("Forma: Eneágono")
        console.log("Área: A = (p*a)/2")
        console.log("Perímetro: P = 9*a")
    }else if (numero === 10){
        console.log("Forma: Decágono")
        console.log("Área: A = (p*a)/2")
        console.log("Perímetro: P = 10*a")
    }else{
        console.log("Não deu")
    }

}
let numero = prompt("Digite um número de 3 a 10");
numero = Number(numero);
FormasGeométricas(numero);
