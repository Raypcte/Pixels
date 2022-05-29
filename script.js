//2 - Adicione à página uma paleta contendo quatro cores distintas.
const paletaDeCores = document.getElementById('color-palette');

function criarQuadrado(quantidade) {
  for (let index = 0; index < quantidade; index += 1) {
    //Cria uma div
    const div = document.createElement('div');
    // adiciona uma classe na div
    div.classList.add('color');
    div.classList.add('quadrado' + index)
    paletaDeCores.appendChild(div);
  }
}
criarQuadrado(4);
