function soma(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

function div(a,b){
    return a * b
}

function mult(a,b){
    return a / b
}

function decisao(resp, pri, seg){
    if(resp == 1){
        resultado = soma(pri, seg)
        document.write("<p>A soma é " + resultado)
    }
    if(resp == 2){
        resultado = sub(pri, seg)
        document.write("<p>A subtração é " + resultado)
    }
    if(resp == 3){
        resultado = mult(pri, seg)
        document.write("<p>A multiplicação é " + resultado)
    }
    if(resp == 4){
        resultado = div(pri, seg)
        document.write("<p>A divisão é " + resultado)
    }

}