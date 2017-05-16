function Map(l, c) {
  this.SIZE = 40;
  this.cells = [];
  this.enemies = [];
  this.tiros = [];

  for (var i = 0; i < l; i++) {
    this.cells[i] = [];
    for (var j = 0; j < c; j++) {
      this.cells[i][j] = 0;
    }
  }
}

Map.prototype.desenhar = function(ctx) {
  for (var i = 0; i < this.cells.length; i++) {
    var linha = this.cells[i];
    for (var j = 0; j < linha.length; j++) {
      switch (this.cells[i][j]) {
        case 0:
          break;
        case 1:
          ctx.fillStyle = 'brown';
          ctx.strokeStyle = 'chocolate';
          ctx.fillRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
          ctx.lineWidth = 3;
          ctx.strokeRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
          break;
        case 3:
          ctx.fillStyle = 'green';
          ctx.strokeStyle = 'chocolate';
          ctx.fillRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
          ctx.lineWidth = 3;
          ctx.strokeRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
          break;
        default:
          ctx.fillStyle = 'green';
          ctx.strokeStyle = 'darkgreen';
          ctx.fillRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
          ctx.lineWidth = 3;
          ctx.strokeRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
      }
    }
  }

  this.desenharInimigos(ctx);
  this.desenharTiros(ctx);
};

Map.prototype.loadMap = function(map) {
  for (var i = 0; i < this.cells.length; i++) {
    for (var j = 0; j < this.cells[i].length; j++) {
      switch (map[i][j]) {
        case 0:
        case 1:
        case 3:
          this.cells[i][j] = map[i][j];
          break;
        case 9:
          this.cells[i][j] = 0;
          this.criaInimigo(i,j);
        break;
      }
    }
  }
};

Map.prototype.getIndices = function (sprite) {
   var pos = {};
   pos.c = Math.floor(sprite.x/this.SIZE);
   pos.l = Math.floor(sprite.y/this.SIZE);
   return pos;
};

Map.prototype.criaInimigo = function (l,c) {
  var inimigo = new Sprite();
  inimigo.x = (c + 0.5) * this.SIZE;
  inimigo.y = (l + 0.5) * this.SIZE;
  inimigo.color = 'red';
  this.enemies.push(inimigo);
};

Map.prototype.desenharInimigos = function(ctx) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].desenhar(ctx);
  }
};

Map.prototype.moverInimigos = function(dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].mover(dt);
  }
};

Map.prototype.moverInimigosOnMap = function(map, dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].moverOnMap(map,dt);
  }
};

Map.prototype.persegue = function(alvo) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].persegue(alvo);
  }
};

Map.prototype.tiro = function(x, y, dir){
  var tiro = new Sprite();
  tiro.x = x;
  tiro.y = y;
  tiro.SIZE = 10;
  tiro.color = 'orange';
  switch (dir) {
    case 1:
      tiro.vx = -200;
    break;
    case 2:
      tiro.vy = -200;
    break;
    case 3:
      tiro.vx = +200;
    break;
    case 4:
      tiro.vy = +200;
    break;
  }
  this.tiros.push(tiro);
};

Map.prototype.desenharTiros = function(ctx){
  for(var i = 0; i < this.tiros.length; i++){
    this.tiros[i].desenhar(ctx);
  }
};

Map.prototype.moverTirosOnMap = function(dt){
  for(var i = 0; i < this.tiros.length; i++){
    this.tiros[i].moverOnMap(map, dt);
  }
};

Map.prototype.moverTiros = function(map, dt) {
  for (var i = 0; i < this.tiros.length; i++) {
    this.tiros[i].mover(dt);
  }
};

Map.prototype.testarColisao = function(alvo){
  for (var i = 0; i < this.enemies.length; i++) {
    if(alvo.colidiuCom(this.enemies[i])){
      alvo.x = 50;
      alvo.y = 90;
      alvo.vidas--;
    }
  }
};

Map.prototype.testarColisaoTiros = function(map){
  for (var i = 0; i < this.enemies.length; i++) {
    for (var j = this.tiros.length-1; j>=0; j--) {
      if(this.tiros[j].colidiuCom(this.enemies[i])){
        this.tiros[j].destroyed = true;
        this.enemies[i].destroyed = true;
        this.remove();
        this.quantidadeInimigos();
      }
    }
  }
  for (var j =  this.tiros.length-1;j>=0; j--) {
    if (map.cells[Math.floor(this.tiros[j].y/40)][Math.floor(this.tiros[j].x/40)] == 1){
      this.tiros[j].destroyed = true;
      this.remove();
    }
  }
};

Map.prototype.remove = function(){
  for (var j = this.tiros.length-1; j>=0; j--) {
    if (this.tiros[j].destroyed == true){
      this.tiros.splice(j,1);
    }
  }
  for (var i = this.enemies.length-1; i>=0; i--) {
    if (this.enemies[i].destroyed == true){
      this.enemies.splice(i,1);
    }
  }
};

Map.prototype.quantidadeInimigos = function(){
  if(this.enemies.length > 1){
    console.log("Faltam " + this.enemies.length + " inimigos");
  }else if(this.enemies.length == 1){
    console.log("Falta " + this.enemies.length + " inimigo");
  }else if(this.enemies.length < 1){
    console.log("Não existem mais inimigos");
  }
};

Map.prototype.testarFim = function(map){
  if(this.enemies.length == 0){
    for (var i = 0; i < this.cells.length; i++) {
      var linha = this.cells[i];
      for (var j = 0; j < linha.length; j++) {
        switch (this.cells[i][j]) {
          case 3:
            this.cells[i][j] = 0;
            break;
        }
      this.desenhaChave(ctx);
      }
    }
  }
  if(pc.x > 580 && pc.x < 595){
    console.clear();
    contador = contador + 1;
    if (contador == 1){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,9,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,9,0,0,0,9,1],
        [1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,9,0,0,0,0,0,0,1,1,1],
        [1,9,0,0,0,0,0,0,0,0,0,0,0,9,3],
        [1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],
        [1,0,9,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 2){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,9,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,9,0,0,0,9,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,9,0,1,0,0,1],
        [1,0,0,0,0,9,0,0,0,0,0,1,1,1,1],
        [1,9,0,0,0,0,0,0,0,0,0,0,0,9,3],
        [1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],
        [1,0,9,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 3){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,9,0,0,0,0,9,0,0,1,1,1],
        [1,0,0,1,0,0,0,0,0,0,0,0,1,0,1],
        [1,0,0,1,1,1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,9,0,0,0,9,1],
        [1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,9,1,1,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,9,3],
        [1,0,1,1,0,0,0,0,0,0,0,0,1,1,1],
        [1,0,9,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 4){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,9,0,0,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,0,9,1,1,0,0,1,0,1],
        [1,0,0,1,1,1,0,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,9,0,0,0,9,0,0,0,9,1],
        [1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,1,1,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,9,3],
        [1,0,1,1,0,0,0,0,9,0,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 5){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,9,0,0,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,0,9,1,1,0,0,1,0,1],
        [1,0,0,1,1,1,0,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,9,0,0,9,9,0,0,0,9,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,1,1,1,0,1,1,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,9,3],
        [1,0,1,1,0,0,0,0,9,0,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 6){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,9,0,0,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,0,0,1,1,0,0,1,0,1],
        [1,0,0,1,1,1,0,1,0,0,0,0,0,0,1],
        [1,0,0,0,0,9,0,0,9,9,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,0,0,0,0,0,0,0,0,1,0,0,1],
        [1,0,1,1,1,9,1,1,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,9,3],
        [1,0,1,1,1,1,1,1,9,0,0,0,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,9,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 7){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,0,0,0,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,0,0,1,1,0,0,1,0,1],
        [1,0,0,1,1,1,0,1,0,0,0,1,1,0,1],
        [1,0,0,0,0,9,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1,1,1,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,9,1,0,0,1],
        [1,0,1,1,1,9,1,1,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,0,0,0,0,9,3],
        [1,9,1,1,1,1,1,1,9,0,0,1,0,1,1],
        [1,0,0,0,0,9,0,0,0,0,0,1,0,9,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 8){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,0,0,0,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,0,0,1,1,0,0,1,0,1],
        [1,0,0,1,1,1,0,1,0,1,0,1,1,0,1],
        [1,9,0,0,1,9,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,1,0,0,0,0,1,1,1,0,0,1],
        [1,0,1,0,0,0,9,0,0,0,9,1,0,0,1],
        [1,0,1,1,1,9,1,1,0,0,0,1,1,1,1],
        [1,0,0,0,0,0,0,1,0,1,0,0,0,9,3],
        [1,9,1,1,1,1,1,1,0,1,0,1,0,1,1],
        [1,0,0,0,0,9,0,0,0,0,0,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 9){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,0,1,9,0,0,1,0,0,1,1,1],
        [1,0,0,1,0,0,0,0,1,1,0,0,1,9,1],
        [1,0,0,1,1,1,0,1,0,1,0,1,1,0,1],
        [1,1,9,0,1,9,0,0,0,0,0,1,0,0,1],
        [1,0,0,0,1,0,0,0,0,1,1,1,0,0,1],
        [1,0,1,0,0,0,0,0,0,0,9,1,0,0,1],
        [1,0,1,1,1,0,1,1,0,0,0,1,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,0,0,9,3],
        [1,9,1,1,1,1,1,1,0,1,0,1,0,1,1],
        [1,0,0,0,0,9,0,0,0,1,0,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    } else if (contador == 10){
      fases=([
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,1,1,1,0,9,0,0,1,0,0,0,0,1],
        [1,0,0,0,0,0,1,0,1,1,0,0,1,9,1],
        [1,0,0,1,1,1,0,1,0,1,0,1,1,0,1],
        [1,1,0,0,1,9,0,0,1,1,0,1,0,0,1],
        [1,0,0,0,1,0,1,0,0,1,0,1,0,0,1],
        [1,0,1,0,0,0,9,1,0,0,9,1,0,0,1],
        [1,0,1,1,1,0,1,1,0,0,0,1,1,0,1],
        [1,0,0,0,0,0,0,1,0,1,0,0,0,9,3],
        [1,9,1,1,1,1,1,1,0,1,1,1,1,0,1],
        [1,0,0,1,0,9,0,0,0,1,1,1,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      ])
    }
    for (var i = 0; i < this.enemies.length; i++) {
      this.enemies[i].destroyed = true;
      this.remove();
    }
    pc.x = 50;
    pc.y = 90;
    mapa.loadMap(fases);
    if(contador < 11){
      console.log("Fase: " + contador);
    }
  }
};

Map.prototype.desenhaChave = function(ctx){
  var chave = new Sprite();
  chave.x = 580;
  chave.y = 380;
  chave.color = 'yellow';
  chave.desenhar(ctx);
};

Map.prototype.acabou = function(ctx, pc){
  if(contador > 10){
    for (var i = 0; i < this.cells.length; i++) {
      var linha = this.cells[i];
      for (var j = 0; j < linha.length; j++) {
        ctx.clearRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
      }
    }
    tela.style.border = "thick solid #843232";
    tela.style.backgroundColor = "#d2c41d";
    ctx.fillStyle = "#843232";
    ctx.strokeStyle = "black";
    ctx.font = "3em fantasy";
    var texto = "Parabéns!";
    ctx.fillText(texto, 180, 200);
    ctx.strokeText(texto, 180, 200); 
    var texto = "Você Venceu!";
    ctx.fillText(texto, 150, 300);
    ctx.strokeText(texto, 150, 300);
  }
}

Map.prototype.verificaPerdeu = function(alvo){
  if(alvo.vidas == 0){
    for (var i = 0; i < this.cells.length; i++) {
      var linha = this.cells[i];
      for (var j = 0; j < linha.length; j++) {
        ctx.clearRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
      }
    }
    cancelAnimationFrame(id);
    tela.style.border = "thick solid #843232";
    tela.style.backgroundColor = "#d2c41d";
    ctx.fillStyle = "#843232";
    ctx.strokeStyle = "black";
    ctx.font = "3em fantasy";
    var texto = "Que pena!";
    ctx.fillText(texto, 200, 200);
    ctx.strokeText(texto, 200, 200); 
    var texto = "Você Perdeu!";
    ctx.fillText(texto, 170, 300);
    ctx.strokeText(texto, 170, 300);
  }
}