/**
 * obj = {
 *  propriedade : valor
 * }
 */


let carro = {
    modelo : "Megane Grand Tour Privilege",
    ano : 2009,
    cor : "Beje",
    registro : {
        chassi : "LKDLFKDLF5646S",
        placa : "FDS-F355",
        renavam : "35698746582"
    }
}


let carros = [
    carro
 ];

console.log(carros);

carros.push({
    modelo : "Fuscao Preto",
    ano : 1973,
    cor : "Preto",
    registro : {
        chassi : "LKDLFKDLF5646S",
        placa : "FDS-F355",
        renavam : "35698746582"
    }
})

console.log(carros);