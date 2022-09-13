let ponto = 0;
let pontoContra = 0;

function placar() {
  textAlign(CENTER);
  textSize(25);
  fill(0,255,0);
  text(ponto, 150, 27);
  if(yAtor == 0) {
    ponto += 1;
    xAtor = 285;
    yAtor = 366;
  }
  textAlign(CENTER);
  textSize(25);
  fill(255,0,0);
  text(pontoContra, 450, 27);
}