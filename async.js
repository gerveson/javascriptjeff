/**
 * USAMOS O ASYNC QUANDO PRECISAMOS QUE A PROMISSE SEJA RESOLVIDA PARA O CODIGO CONTINUAR
 */

const responda = async (mensagem) => new Promise((resolve, reject) => {
    setTimeout(function(){
    resolve(mensagem)
    }, 5000)
})

async function executaMensagem(){
    console.log("chamando primeira resposta")

    const mensagemUm = await responda("esta é a primeira pergunta")
    console.log(mensagemUm)

    console.log("chamando mensagem dois")
    const mensagemDois = await responda("esta é a segunda mensagem")
    console.log(mensagemDois);

    console.log("fim");

}

executaMensagem()