// Proposta da Aula
function adicionarFilme() {
  let filmePoster = document.getElementById('poster').value;
  let elementoListaFilmes = document.getElementById('listaFilmes');
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + '<img src =' + filmePoster + '>';
  document.getElementById('poster').value = '';
}

// Desafio - Rafaella: Adicionar um link ao clicar na imagem, direcionando para o trailer do filme
/*
function adicionarFilme() {
    let filmePoster = document.getElementById("poster").value;
    let filmeTrailer = document.getElementById("trailer").value;
    let elementoFilmePoster = document.getElementById("listaFilmes");
    elementoFilmePoster.innerHTML =
        elementoFilmePoster.innerHTML +
        '<a target = "_blank" href = ' +
        filmeTrailer +
        ">" +
        "<img src =" +
        filmePoster +
        ">" +
        "</a>";
    document.getElementById("poster").value = "";
    document.getElementById("trailer").value = "";
    alert("Filme adicionado com sucesso!");
}
 */

// Desafio - Guilherme: Solucionar o problema do usuário adicionando algo que não seja uma imagem no campo de texto
/*
function adicionarFilme() {
    var filmePoster = document.getElementById("poster").value;
    var filmeTrailer = document.getElementById("trailer").value;

    if (verificarImagem(filmePoster) !== true) {
        alert("Somente são permitidas URLs de pôster com extensão jpg, jpeg, png, webp, avif, gif e svg");
    } else {
        var elementoFilmePoster = document.getElementById("listaFilmes");
        elementoFilmePoster.innerHTML =
            elementoFilmePoster.innerHTML +
            '<a target = "_blank" href = ' +
            filmeTrailer +
            ">" +
            "<img src =" +
            filmePoster +
            ">" +
            "</a>";
        document.getElementById("poster").value = "";
        document.getElementById("trailer").value = "";
        alert("Filme adicionado com sucesso!");
    }
}

function verificarImagem(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}
*/

// Desafio - Paulo: Adicionar os filmes e seus respectivos trailer em listas (Nesse exemplo, quando a função "adicionarFilme()" é executada, um novo pôster e trailer são adicionados na posição 0 de seus respectivos arrays. Isso se dá pelo fato de que uma vez que apresentamos um elemento na tela pelo innerHTML durante a execução da função "adicionarFilme()" ele permanece na tela até que atualizemos a página, dessa forma não é necessário buscar no array os elementos previamente adicionados para serem exibidos novamente na tela')
/*
var listaPoster = [];
var listaTrailer = [];
function adicionarFilme() {
    var verificacaoPoster = "";
    var verificacaoTrailer = "";
    verificacaoPoster = document.getElementById("poster").value;
    verificacaoTrailer = document.getElementById("trailer").value;
    listaPoster[0] = verificacaoPoster;
    listaTrailer[0] = verificacaoTrailer;
    var elementoFilmePoster = document.getElementById("listaFilmes");
    elementoFilmePoster.innerHTML = elementoFilmePoster.innerHTML +
        '<a target = "_blank" href = ' +
        listaTrailer[0] +
        ">" +
        "<img src =" +
        listaPoster[0] +
        ">" +
        "</a>";
    document.getElementById("poster").value = "";
    document.getElementById("trailer").value = "";
    alert("Filme adicionado com sucesso!");
}
*/