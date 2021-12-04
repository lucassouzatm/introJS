console.log('Trbalhando com listas');

//const salvador = 'Salvador';
//const saoPaulo = 'São Paulo';
// const rioDeJaneiro = `Rio de Janeiro`;

//let new = 2; //Não será possível utilizar o new como variável pois ele é palavra reservada da linguagem,

const listaDeDestinos = new Array (
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)

listaDeDestinos.push('Curitiba') //adicionando um item na lista

console.log("Destinos Possíveis");

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //removendo um item especifico da lista 'São Paulo' na posíção 1 pois o inicio é 0,1...
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
