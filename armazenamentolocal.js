/**
armazenamento de informações no navegador
1- cookies
2- localStorange
3- sessionStorange
*/

//usando cookie

//user=50; exibirBanner=true; usuarioLogado=true
// //document.cookie = "usuarioLogado=true";
// let cookies = document.cookie.split(';')
// console.log(cookies);

//LOCAL STORAGE
/**
 * setItem -> seta um item, grava um item
 * getItem -> traz um item gravado
 */
localStorage.setItem("usuario", "Gerveson")
console.log(localStorage.getItem("usuario"));

// TEM VALIDADE ENQUANTO O NAVEGADOR ESTIVER ABERTO
// sessionStorage.setItem()
// sessionStorage.getItem()