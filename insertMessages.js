//inserir nova mensagm na api

fetch("  http://cafepradev.com.br:21020/animals/search/", {
  method : "GET",
  headers : {
    "Content-type" : "application/json; charset=UTF-8"
  },
  body : JSON.stringify({
    name : "Gerveson Fernandes",
    message : "aula de request com post"
  })  
})
.then(response => response.json())
.then((res) => {
    if(res.error){
        console.log(res.error.message);
    }else{
        console.log(res.message);
    }
})
    .catch(err => console.log(err))