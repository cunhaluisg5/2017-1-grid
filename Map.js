function Map(l, c) {
  this.SIZE = 32;
  this.cells = [];
  this.enemies = [];
  this.imageLib = null;
  this.tiros = [];

  for (var i = 0; i < l; i++) {
    this.cells[i] = [];
    for (var j = 0; j < c; j++) {
      this.cells[i][j] = 0;
    }
  }
}
Map.prototype.desenhar = function(ctx){
  //this.desenharLimites(ctx);
  this.desenharTiles(ctx);
}

Map.prototype.desenharLimites = function(ctx) {
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
        default:
      }
    }
  }
  this.desenharInimigos(ctx);
};
Map.prototype.desenharTiles = function(ctx) {
  for (var i = 0; i < this.cells.length; i++) {
    var linha = this.cells[i];
    for (var j = 0; j < linha.length; j++) {
      switch (this.cells[i][j]) {
        case 0:
          this.imageLib.drawImageTile(ctx, "floor", 3, 1, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 1:
          this.imageLib.drawImageTile(ctx, "floor", 3, 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "mountain", 7, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 5:
          break;
        default:
      }
    }
  }
  this.desenharInimigos(ctx);
};

Map.prototype.loadMap = function(map) {
  for (var i = 0; i < this.cells.length; i++) {
    for (var j = 0; j < this.cells[i].length; j++) {
      switch (map[i][j]) {
        case 0:
        case 1:
        case 5:
          this.cells[i][j] = map[i][j];
          break;
        case 9:
          this.cells[i][j] = 0;
          this.criaInimigo(i,j);
        break;
        default:

      }
    }
  }
};

Map.prototype.getIndices = function (sprite) {
   var pos = {};
   pos.c = Math.floor(sprite.x / this.SIZE);
   pos.l = Math.floor(sprite.y / this.SIZE);
   return pos;
};


Map.prototype.criaInimigo = function (l,c) {
  var inimigo = new Sprite();
  inimigo.imageLib = this.imageLib;
  inimigo.x = (c + 0.5) * this.SIZE;
  inimigo.y = (l + 0.5) * this.SIZE;
  this.enemies.push(inimigo);
};


Map.prototype.desenharInimigos = function(ctx) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].desenhar(ctx);
  }
}

Map.prototype.moverInimigos = function(dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].mover(dt);
  }
}

Map.prototype.moverInimigosOnMap = function(map, dt) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].moverOnMap(map,dt);
  }
}

Map.prototype.persegue = function(alvo) {
  for (var i = 0; i < this.enemies.length; i++) {
    this.enemies[i].persegue(alvo);
  }
}

Map.prototype.tiro = function(x, y, dir){
  var tiro = new Sprite();
  tiro.x = x;
  tiro.y = y;
  tiro.SIZE = 5;
  tiro.color = 'orange';
  switch (dir) {
    case 1:
      pc.pose = 10;
      tiro.vx = -200;
    break;
    case 2:
      pc.pose = 11;
      tiro.vy = -200;
    break;
    case 3:
      pc.pose = 8;
      tiro.vx = +200;
    break;
    case 4:
      pc.pose = 9;
      tiro.vy = +200;
    break;
  }
  this.tiros.push(tiro);
};

Map.prototype.desenharTiros = function(ctx){
  for(var i = 0; i < this.tiros.length; i++){
    this.tiros[i].desenharLimites(ctx);
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
    for (var j = this.tiros.length - 1; j >= 0; j--) {
      if(this.tiros[j].colidiuCom(this.enemies[i])){
        this.tiros[j].destroyed = true;
        this.enemies[i].destroyed = true;
        break;
      }
    }
  }
  for (var j =  this.tiros.length - 1; j >= 0; j--) {
    if (map.cells[Math.floor(this.tiros[j].y / 32)][Math.floor(this.tiros[j].x / 32)] == 1){
      this.tiros[j].destroyed = true;
      break;
    }
  }
  this.remove();
};

Map.prototype.remove = function(){
  for (var j = this.tiros.length - 1; j >= 0; j--) {
    if (this.tiros[j].destroyed == true){
      this.tiros.splice(j,1);
    }
  }
  for (var i = this.enemies.length - 1; i >= 0; i--) {
    if (this.enemies[i].destroyed == true){
      this.enemies.splice(i,1);
    }
  }
};

Map.prototype.testarFim = function(map){
  if(this.enemies.length == 0){
    for (var i = 0; i < this.cells.length; i++) {
      var linha = this.cells[i];
      for (var j = 0; j < linha.length; j++) {
        this.desenhaChave(ctx);
      }
    }
  }
  if(pc.x > 465 && pc.x < 480 && this.enemies.length == 0){
    contador = contador + 1;
    if (contador == 1){
      fases=([
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
    } else if (contador == 2){
      fases=([
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
  }
};

Map.prototype.desenhaChave = function(ctx){
  var chave = new Sprite();
  chave.x = 465;
  chave.y = 355;
  chave.color = 'yellow';
  chave.desenharLimites(ctx);
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
    ctx.fillText(texto, 150, 150);
    ctx.strokeText(texto, 150, 150);
    var texto = "Você Venceu!";
    ctx.fillText(texto, 120, 250);
    ctx.strokeText(texto, 120, 250);
  }
};

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
    ctx.fillText(texto, 150, 150);
    ctx.strokeText(texto, 150, 150); 
    var texto = "Você Perdeu!";
    ctx.fillText(texto, 120, 250);
    ctx.strokeText(texto, 120, 250);
  }
}
