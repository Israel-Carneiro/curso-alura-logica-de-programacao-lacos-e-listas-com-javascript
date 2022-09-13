let compCarro = 70;
let largCarro = 40;
let xCarro = [-70, -70, -70, 600, 600, 600];
let yCarro = [40, 95, 150, 210, 265, 320];
let velocCarro = [7, 5, 3.5, 6, 5, 3];

function mostraCarro() {
  for (let i = 0; i < imagemCarro.length; i++) {
    image(imagemCarro[i], xCarro[i], yCarro[i], compCarro, largCarro);
  }
}

function movimentoCarro() {
  for (let i = 0; i < 3; i++) {
    xCarro[i] += velocCarro[i];
    if(xCarro[i] >= 630) {
      xCarro[i] = -70;
    }
  }
  for (let i = 3; i < 6; i++) {
    xCarro[i] -= velocCarro[i];
    if(xCarro[i] <= -100) {
      xCarro[i] = 600;
    }
  }
}