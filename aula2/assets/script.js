let numeroSecreto = parseInt(Math.random() * 11);
let numeroUsuario = parseInt(prompt("Adivinhe o número secreto (Dica: É um número inteiro entre 0 e 10)"));
let numeroTentativa = 1;
let probabilidadeAcerto = 1;
let maximoPossibilidade = 11;

alert (`Tentativas realizadas: ${numeroTentativa}`);
alert ("Probabilidade de acerto: " + ((probabilidadeAcerto / maximoPossibilidade) * 100).toFixed(2) + "%");

while (numeroUsuario != numeroSecreto) {
  if (numeroUsuario > numeroSecreto) {
    alert("O número secreto é menor que o número digitado");
    numeroUsuario = parseInt(prompt("Tente novamente (Dica: É um número entre 0 e 10)"));
  } else if (numeroUsuario < numeroSecreto) {
    alert("O número secreto é maior que o número digitado");
    numeroUsuario = parseInt(prompt("Tente novamente (Dica: É um número entre 0 e 10)"));
  } else {
    alert("Por favor, digite um número válido");
    numeroUsuario = parseInt(prompt("Tente novamente (Dica: É um número entre 0 e 10)"));
  }
  numeroTentativa = numeroTentativa + 1;
  alert (`Tentativas realizadas: ${numeroTentativa}`);
  if (maximoPossibilidade != 0) {
    maximoPossibilidade = maximoPossibilidade - 1;
    alert ("Probabilidade de acerto para novos números: " + ((probabilidadeAcerto / maximoPossibilidade) * 100).toFixed(2) + "%");
  } else {
    alert ("Não existe mais probabilidade de acerto dentro dos números inteiros possíveis");
  }
}

if (numeroTentativa == 1) {
  alert(`Parabéns, você conseguiu adivinhar o número secreto ${numeroSecreto} em ${numeroTentativa} tentativa!`);
} else {
  alert(`Parabéns, você conseguiu adivinhar o número secreto ${numeroSecreto} em ${numeroTentativa} tentativas!`);
}