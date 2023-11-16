// Proposta da aula
let listaFilmes = [];

listaFilmes[0] = "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";

listaFilmes[1] = "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";

listaFilmes[2] = "https://m.media-amazon.com/images/M/MV5BM2I0ZDcyYzItMGEyNi00YWVhLTlmNTQtOWVlYjE1ZGVhNWM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg";

for (let i = 0; i < listaFilmes.length; i++) {
  document.write('<img src = ' + listaFilmes[i] + ' alt = "Pôster de filme da plataforma Aluraflix">');
}

// Desafio - Paulo: Alterar o bloco condicional "for" para o bloco condicional "while"
/*
let listaFilmes = [];

listaFilmes[0] = "htatps://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";

listaFilmes[1] = "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg";

listaFilmes[2] = "https://m.media-amazon.com/images/M/MV5BM2I0ZDcyYzItMGEyNi00YWVhLTlmNTQtOWVlYjE1ZGVhNWM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg";

let i = 0

while (i < listaFilmes.length) {
  document.write('<img src = ' + listaFilmes[i] + ' alt = "Pôster de filme da plataforma Aluraflix">');
  i++;
}
*/

// Desafio - Rafaella: Adicionar à todas imagens a condição de formato ".jpeg"
/*
let listaFilmes = [];

listaFilmes[0] = "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_";

listaFilmes[1] = "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_";

listaFilmes[2] = "https://m.media-amazon.com/images/M/MV5BM2I0ZDcyYzItMGEyNi00YWVhLTlmNTQtOWVlYjE1ZGVhNWM0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_";

for (let i = 0; i < listaFilmes.length; i++) {
  document.write('<img src = ' + listaFilmes[i] + '.jpeg" alt = "Pôster de filme da plataforma Aluraflix">');
}
*/

// Desafio - Guilherme: Criar uma nova lista para guardar os nomes do filme e apresentá-los no HTML com sua imagem respectiva (foi incrementado também a opção de inserir o nome do filme e URL da imagem do pôster por meio de prompt, mantendo o padrão de 3 items no array)
/*
let listaNomeFilmes = [];
let listaUrlFilmes = [];

for (let i = 0; i < 3; i++) {
  listaNomeFilmes[i] = prompt("Digite o nome do  filme desejado");
  listaUrlFilmes[i] = prompt("Digite a URL do pôster do filme desejado");
  alert("Filme e pôster adicionados com sucesso!");
}

for (let i = 0; i < listaNomeFilmes.length; i++) {
  document.write('<h3 style="color:white;"> Filme: ' + listaNomeFilmes[i] + '</h3>');
  document.write('<img src = ' + listaUrlFilmes[i] + ' alt = "Pôster de filme da plataforma Aluraflix">');
}
*/