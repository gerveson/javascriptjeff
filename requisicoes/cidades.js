
const selEstados = document.querySelector('#estado');

selEstados.addEventListener("change", function(){
    let selecionado = this.value

    let estrutura = `<option value="">Selecione</option>`

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selecionado}/municipios`)
        .then(retorno => retorno.json())
        .then(function(cidades){
            for(posicao in cidades){
                estrutura += `<option value="${cidades[posicao].cidades}>${cidades[posicao].nome}</option>`
            }

            document.querySelector("#cidade").innerHTML = estrutura
        })
})
