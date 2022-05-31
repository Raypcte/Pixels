// 2 - Adicione à página uma paleta contendo quatro cores distintas.
const paletaDeCores = document.getElementById('color-palette');
const quadroDePixel = document.getElementById('pixel-board');

function clickDaPaleta(event) {
  const corDiv = event.target;
  const todasAsCores = document.querySelectorAll('.color');
  for (let index = 0; index < todasAsCores.length; index += 1) {
    // console.log(index);
    todasAsCores[index].classList.remove('selected');
  }
  corDiv.classList.add('selected');
}

function criarQuadrado(quantidade) {
  const minhasCores = ['black', 'red', 'aquamarine', 'pink'];
  for (let index = 0; index < quantidade; index += 1) {
    // Cria uma div
    const div = document.createElement('div');
    div.style.backgroundColor = minhasCores[index];
    div.addEventListener('click', clickDaPaleta);
    // adiciona uma classe na div
    if (index === 0) {
      div.classList.add('selected');
      //   div.style.backgroundColor = 'black';
    }
    div.classList.add('color');
    // div.classList.add(`quadrado${index}`);
    paletaDeCores.appendChild(div);
  }
}
criarQuadrado(4);

function colorirPixel(event) {
  const corSelecionada = document.querySelector('.selected');
  const paletinha = corSelecionada.style.backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = paletinha;
}

function criarTabela() {
  for (let index = 0; index < 5; index += 1) {
    // Nesse for estou repetindo a logica das linhas.
    const section = document.createElement('section');
    for (let iLinha = 0; iLinha < 5; iLinha += 1) {
      // Nesse for estou criando a linha da tabela.
      const div = document.createElement('div');
      div.addEventListener('click', colorirPixel);
      div.classList.add('pixel');
      section.appendChild(div);
      quadroDePixel.appendChild(section);
    }
  }
}
criarTabela();
