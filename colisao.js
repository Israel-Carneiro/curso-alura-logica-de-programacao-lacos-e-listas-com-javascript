function colisao() {
    for (let i = 0; i < imagemCarro.length; i++) {
      if ((xAtor + largAtor) > xCarro[i] && yAtor < (yCarro[i] + largCarro) && (yAtor + compAtor) > yCarro[i] && xAtor < (xCarro[i] + compCarro) && yAtor < (yCarro[i] + largCarro) && (yAtor + compAtor) > yCarro[i]) {
        xAtor = 285;
        yAtor = 366;
        pontoContra += 1;
      }
    }
  }