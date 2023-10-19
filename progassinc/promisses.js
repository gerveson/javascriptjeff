/**
 * promises sao promessas
 * é uma classe que permite a construção de funções de processamento assincrono.
 * representa um valor que poderá estar disponivel no futuro.
 */

// new Promise((resolve, reject) => {
    
// })

// new Promise(function(resolve, reject){
    
// })

/**
 * EXEMPLO 1
 * 
 */

const timeout = (duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

timeout(3000).then(function(){
    console.log("passou 3 segundos");
})

