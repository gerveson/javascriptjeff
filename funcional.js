//programação funcional

//map

// let dados = [3, 4, 5, 6];

// let dadosNovo = dados.map(function(element){
//     return element * 3
// })

// console.log(dadosNovo);

// let dados = [6, 11, 300, 120, 55];

// let resultado = dados.filter(function(d){
//     return d > 50
//  })
//  console.log(resultado);

//filter com objeto de array
// let pessoas = [
//     {
//         nome: "Gerveson",
//         idade: 46
//     },
//     {
//         nome: "Andreia",
//         idade: 48
//     },
//     {
//         nome: "Laura",
//         idade: 21
//     }
// ]

// let resultado = pessoas.filter((pessoa)=> {
//     return pessoa.idade >= 40
// })

// console.log(resultado);

//reduce

let numeros = [10, 20, 30]

let resultado = numeros.reduce(function(total, numero){
    return (total + numero)
})

console.log(resultado / 3);