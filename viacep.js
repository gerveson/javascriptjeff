const viacep = (cep) => {
    return new Promise((resolve, reject) => {
        //viacep.com.br/ws/01001000/json/
        fetch('https://viacep.com.br/ws/${cep}/json/')
        .then(function(res){
            if(resultado.Response.status == 200){
            resolve(resultado.body)
        }else{
            reject(new Error("Cep não encontrado"))
        } 
        })
       
    })
}

viacep('89031270')
    .then(function(resultado){
        console.log(resultado);
    })
        .catch(erro => console.log(erro.message))