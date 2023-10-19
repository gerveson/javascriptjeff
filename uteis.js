const prompt = require('prompt-sync')();


//funcoes de agendamento
//executa uma vez apos atingir o tempo
// setTimeout(function(){
//     console.log("QUASE NO FIM DA AULA");
// }, 4000)

// setTimeout(frase, 2000)

// function frase(){
//     console.log("exemplo com funcao por fora");
// }

//setInterval - executa repetetivamente quando atinge o tempo

// setInterval(function(){
//     console.log("LINDO");
// }, 3000)


//FUNÇÕES DE STRING

//LENGTH - PEGA O TAMANHO DA STRING
let str = "Qual o tamanho da minha string";
// console.log( str.length );

//indexOf - procurar a ocorrencia de um pedaço de string, caractere da string
// console.log( str.indexOf("tamanho"));

//slice - corta uma string
// console.log( str.slice(0, 6))

//tolowercase - transforma a string em letras minusculas

// console.log( str.toLowerCase());

//touppercase - converte tudo para maiusculo
// console.log( str.toUpperCase());

//replece() - troca uma ocorrencia da string
// console.log( str.replace("da minha STRING", "do meu texto"));


//-----------metodos para tratamento de numeros
// parseint - converte um numero em formato de string para numerico
// let numero = parseInt(prompt("Digite um numero:"))
// let numero2 = parseInt(prompt("Digite um numero:"))

// console.log("O resultado da operação é" , numero + numero2);

//parsefloat - converte numero string para float

// let n1 = 200.85565656;
// let n2 = 358.15656598;

// console.log(parseFloat(n1) + parseFloat(n2));

//tofixed - limita o numero de casas decimais
// console.log( n1.toFixed(3));

//toprecision

// console.log(n1.toPrecision(3));

//tostring - convert dados em string
let numero = 200 + 400;
console.log(numero);
console.log( numero.toString());

