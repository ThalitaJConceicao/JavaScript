//OBS: O código não deu certo!
function maior(a,b,c){
    if (a > b && b > C) {
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }
}

function menor(a,b,c){
    var r = a < b && a < c ? a: b < a && b < c? b : c;
    return r;
}

function formataMes(mes){
    switch (mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
    
        default:
            console.log("Mão implementei ainda");
    }
}
