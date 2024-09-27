var n1 = 5;
var n2 = 5;

function somar(n1,n2){
    n1 = Number(n1);
    n2 = Number(n2);
    var resultado = n1 + n2;
    var resposta = `o resultado é ${resultado}`;
    console.log(resposta);
}
somar(n1,n2);

function subtrair(n1,n2){
    n1 = Number(n1);
    n2 = Number(n2);
    var resultado = n1 - n2;
    var resposta = `o resultado é ${resultado}`;
    console.log(resposta);
}
subtrair(n1,n2);


function multiplicar(n1,n2){
    n1 = Number(n1);
    n2 = Number(n2);
    var resultado = n1 * n2;
    var resposta = `o resultado é ${resultado}`;
    console.log(resposta);
}
multiplicar(n1,n2);


function dividir(n1,n2){
    n1 = Number(n1);
    n2 = Number(n2);
    var resultado = n1 / n2;
    var resposta = `o resultado é ${resultado}`;
    console.log(resposta);
}
dividir(n1,n2);
