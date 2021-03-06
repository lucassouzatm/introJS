console.log ('Trabalhando com Condicionais');

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

const idadeComprador = 18;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log ("Destinos Possíveis:");
console.log(listaDeDestinos);

// Condição errada por conta do splice.
// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// } 

if (idadeComprador >= 18 || estaAcompanhado == true){
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); //Removendo item
} else {
    console.log ("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n")
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Bom Embarque!!");
}else{
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

//Condições que podem ser usada:
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);