function setup() {
    createCanvas(600, 400)
  }
  
  function draw() {
    background(imagemEstrada);
    mostraAtor();
    mostraCarro();
    movimentoAtor();
    movimentoCarro();
    colisao();
    placar();
  }