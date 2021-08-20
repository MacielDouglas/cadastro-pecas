const listaDePecas = ["Farois", "Lanternas", "Lampadas", "Soquetes"]

console.log(listaDePecas)

if (listaDePecas.length < 10) {  //comando if para validar condição cadastro 10 pçs
    console.log("É possível cadstrar mais peças")
} else {          //comando else, indicar quantidade atingida
    console.log("Não há mais espaço na lista")
}

var peso = 100;

if (peso >= 100) { //Peso minimo solicitado pelo cliente.
    console.log("Peso do item esta adequado")
    
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "Terminais";

if (nomePeca.length > 3) { //determina o numero de caracteres para noome cadastro
    console.log("Nome adequado!")
} else if (nomePeca.length == 0) {
    console.log("O nome cadastro não pode ser vazio")    
} else {
    console.log("O nome de cadastro deve ter mais de 3 caracteres")
}

switch (nomePeca.length) { //Determina o numero de caracteres para o nome de cadastro.
    case 0:
        console.log("O nome não pode ser vazio")        
        break;
        case 1:
        case 2:
        case 3:
            console.log("O nome deve possuir mais de 3 caracteres")
            break;

    default:
        console.log("Nome adequado!")
        break;
}
    
