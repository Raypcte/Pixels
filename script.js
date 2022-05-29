// 2 - Adicione à página uma paleta contendo quatro cores distintas.
const paletaDeCores = document.getElementById('color-palette');
const quadroDePixel = document.getElementById('pixel-board');

function criarQuadrado(quantidade) {
  for (let index = 0; index < quantidade; index += 1) {
    // Cria uma div
    const div = document.createElement('div');
    // adiciona uma classe na div
    div.classList.add('color');
    div.classList.add(`quadrado${index}`);
    paletaDeCores.appendChild(div);
  }
}
criarQuadrado(4);

function criarTabela() {
  for (let index = 0; index < 5; index += 1) {
    // Nesse for estou repetindo a logica das linhas.
    const section = document.createElement('section');
    for (let iLinha = 0; iLinha < 5; iLinha += 1) {
      // Nesse for estou criando a linha da tabela.
      const div = document.createElement('div');
      div.classList.add('pixel');
      section.appendChild(div);
      quadroDePixel.appendChild(section);
    }
  }
}
criarTabela();
