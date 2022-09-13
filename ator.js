let xAtor = 285;
let yAtor = 370;
let compAtor = 30;
let largAtor = 30;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, compAtor, largAtor);
}

function movimentoAtor() {
  if(keyIsDown(UP_ARROW) && yAtor > 0) {
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW) && yAtor < 370) {
    yAtor += 3;
  }
  if(keyIsDown(LEFT_ARROW) && xAtor > 0) {
    xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW) && xAtor < 570) {
    xAtor += 3;
  }
}