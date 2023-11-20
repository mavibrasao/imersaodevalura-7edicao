let listaGrupoVerde = [
  { nome: 'Jannik Sinner', jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
  { nome: "Novak Djokovic", jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
  { nome: "Holger Rune", jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
  { nome: "Hubert Hurkacz", jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
];

let listaGrupoVermelho = [
  { nome: 'Carlos Alcaraz', jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
  { nome: "Daniil Medvedev", jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
  { nome: "Alexander Zverev", jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
  { nome: "Andrey Rublev", jogos: 0, pontos: 0, vitoria: 0, derrota: 0 },
];

function adicionarVitoriaGrupo(jogador) {
  if (jogador.jogos < 3) {
      jogador.jogos++;
      jogador.vitoria++;
      jogador.pontos = jogador.pontos + 200;
      exibirElementoGrupo();
  } else {
      alert("Número máximo de jogos atingidos para esse jogador na fase de grupos")
  }
}

function adicionarDerrotaGrupo(jogador) {
  if (jogador.jogos < 3) {
      jogador.jogos++;
      jogador.derrota++;
      exibirElementoGrupo();
  } else {
      alert("Número máximo de jogos atingidos para esse jogador na fase de grupos")
  }
}

function exibirElementoGrupo() {
  let elementoGrupoVerde = document.getElementById("tabelaGrupoVerde");
  let elementoGrupoVermelho = document.getElementById("tabelaGrupoVermelho");
  let agruparGrupoVerde = "";
  let agruparGrupoVermelho = "";
  for (let i = 0; i < listaGrupoVerde.length; i++) {
      agruparGrupoVerde += `<tr>
      <td>${listaGrupoVerde[i].nome}</td>
      <td>${listaGrupoVerde[i].jogos}</td>
      <td>${listaGrupoVerde[i].pontos}</td>
      <td>${listaGrupoVerde[i].vitoria}</td>
      <td>${listaGrupoVerde[i].derrota}</td>
      <td><button id onClick="adicionarVitoriaGrupo(listaGrupoVerde[${i}])">Adicionar</button></td>
      <td><button id onClick="adicionarDerrotaGrupo(listaGrupoVerde[${i}])">Adicionar</button></td>
      </tr>`;
      agruparGrupoVermelho += `<tr>
      <td>${listaGrupoVermelho[i].nome}</td>
      <td>${listaGrupoVermelho[i].jogos}</td>
      <td>${listaGrupoVermelho[i].pontos}</td>
      <td>${listaGrupoVermelho[i].vitoria}</td>
      <td>${listaGrupoVermelho[i].derrota}</td>
      <td><button id onClick="adicionarVitoriaGrupo(listaGrupoVermelho[${i}])">Adicionar</button></td>
      <td><button id onClick="adicionarDerrotaGrupo(listaGrupoVermelho[${i}])">Adicionar</button></td>
      </tr>`;
  }
  elementoGrupoVerde.innerHTML = agruparGrupoVerde;
  elementoGrupoVermelho.innerHTML = agruparGrupoVermelho;
}

exibirElementoGrupo();