function Map(l, c) {
  this.SIZE = 32;
  this.cells = [];
  this.enemies = [];
  this.coins = [];
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
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 1:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "piso_muro", 1, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 2:
          this.imageLib.drawImageTile(ctx, "architecture", 7, 17, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 3:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 17, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 4:
          this.imageLib.drawImageTile(ctx, "architecture", 7, 16, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 6:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 16, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 7:
          this.imageLib.drawImageTile(ctx, "architecture", 7, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 8:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 10:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "piso_muro", 1, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 11:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 12:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 13:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 14:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 15:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 16:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "piso_muro", 1, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 17:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 18:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 19:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 20:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 21:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 22:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 9, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 23:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 9, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 24:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 9, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 25:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 9, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 26:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 9, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 27:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 28:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 29:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 30:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 31:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 32:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 33:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 34:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 35:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 19, 30, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 36:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "piso_muro", 1, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 37:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 38:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 39:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 40:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 41:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 42:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 43:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 44:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 45:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 46:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 47:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 14, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 48:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 14, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 49:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 14, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 50:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 14, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 51:
          this.imageLib.drawImageTile(ctx, "architecture", 2, 2, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 14, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 52:
          this.imageLib.drawImageTile(ctx, "architecture", 0, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 53:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 54:
          this.imageLib.drawImageTile(ctx, "architecture", 1, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 55:
          this.imageLib.drawImageTile(ctx, "terrain", 19, 28, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 5, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 56:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 1, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 57:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 58:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 59:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 60:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 61:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 62:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 63:
          this.imageLib.drawImageTile(ctx, "architecture", 3, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 64:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 20, 28, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 3, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 65:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 0, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 1, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 66:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 67:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 0, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 68:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 69:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 70:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 71:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 0, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 72:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 15, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 73:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 0, 0, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 4, 3, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 74:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 75:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 76:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 77:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 6, 16, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "architecture", 6, 16, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 16, 17, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 78:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 6, 17, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "architecture", 6, 17, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 16, 18, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 79:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 6, 18, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "architecture", 6, 18, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 16, 19, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 80:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 81:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 82:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 1, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 83:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 84:
          this.imageLib.drawImageTile(ctx, "architecture", 7, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 85:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 86:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 7, 16, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "architecture", 7, 16, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 17, 17, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 87:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 7, 17, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "architecture", 7, 17, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 17, 18, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 88:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 7, 18, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "architecture", 7, 18, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 17, 19, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 89:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 10, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 90:
          this.imageLib.drawImageTile(ctx, "architecture", 7, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 91:
          this.imageLib.drawImageTile(ctx, "architecture", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 2, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 92:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 93:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 94:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 95:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 96:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 97:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 98:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 99:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 100:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 7, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 3, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 101:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 102:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 103:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 104:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 105:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 106:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 107:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 108:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 109:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 7, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 110:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 111:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 112:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 113:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 114:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 115:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 6, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 20, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 116:
          this.imageLib.drawImageTile(ctx, "architecture", 9, 6, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 19, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 117:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 118:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 119:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 120:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 121:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 122:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 8, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 20, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 123:
          this.imageLib.drawImageTile(ctx, "architecture", 9, 8, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 19, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 124:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 19, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 125:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 18, 24, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 14, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 126:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 13, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 127:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 12, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 128:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 14, 27, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 129:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 13, 27, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 130:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 12, 27, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 131:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 19, 30, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 132:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 18, 24, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 14, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 133:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 13, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 134:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 12, 28, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 135:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 14, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 136:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 13, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 137:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain", 12, 29, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 138:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 139:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 8, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 140:
          this.imageLib.drawImageTile(ctx, "architecture", 10, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 141:
          this.imageLib.drawImageTile(ctx, "architecture", 11, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 142:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 7, 12, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 7, 12, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 15, 19, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 143:
          if(this.enemies.length == 0){
          this.imageLib.drawImageTile(ctx, "architecture", 6, 12, 32, j * this.SIZE, i * this.SIZE);
          }else{
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 6, 12, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "architecture", 14, 19, 32, j * this.SIZE, i * this.SIZE);
          }
          break;
          case 145:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 0, 17, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 146:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 1, 17, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 147:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 2, 17, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 148:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 0, 16, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 149:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 1, 16, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 150:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 2, 16, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 151:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 0, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 152:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 1, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 153:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 2, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 154:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",22, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 4, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 155:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 5, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 156:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 3, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 6, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 157:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",22, 4, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 4, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 158:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 4, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 5, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 159:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 4, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 6, 12, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 160:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",22, 5, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 4, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 161:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 5, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 5, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 162:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 5, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos", 6, 13, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 163:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 3, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 164:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 4, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 165:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "terrain",23, 5, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 166:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",25, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 167:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",25, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 168:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",26, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 169:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",26, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 170:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",27, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 171:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",27, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 172:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",25, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 173:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",29, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 174:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",29, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 175:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",30, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 176:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",30, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 177:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",31, 10, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 178:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",31, 11, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 179:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",30, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 180:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",31, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 181:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",5, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 182:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",5, 24, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 183:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",5, 25, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 184:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",6, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 185:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",6, 24, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 186:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",6, 25, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 187:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",7, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 188:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",7, 24, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 189:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",7, 25, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 190:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 22, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 191:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 192:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",15, 22, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 193:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",15, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 194:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 195:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 196:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",15, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 197:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",15, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 198:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",20, 23, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 199:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 200:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 201:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",15, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 202:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",15, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 203:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",16, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 204:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",16, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 205:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",12, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 206:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",12, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 207:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",13, 18, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 208:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",13, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 209:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",9, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 210:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",9, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 211:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",9, 22, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 212:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",10, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 213:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",10, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 214:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",10, 22, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 215:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",12, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 216:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",13, 20, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 217:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",10, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 218:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",11, 15, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 219:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",13, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 220:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",13, 1, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 221:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",13, 2, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 222:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 0, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 223:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",14, 1, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 224:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",12, 1, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 225:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",11, 6, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 226:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",0, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 227:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",2, 19, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 228:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",2, 22, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 229:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",5, 21, 32, j * this.SIZE, i * this.SIZE);
          break;
          case 230:
          this.imageLib.drawImageTile(ctx, "piso_muro", 0, contador - 1, 32, j * this.SIZE, i * this.SIZE);
          this.imageLib.drawImageTile(ctx, "objetos",7, 22, 32, j * this.SIZE, i * this.SIZE);
          break;
        case 5:
          break;
        default:
      }
    }
  }
  this.desenharInimigos(ctx);
  this.desenharMoeda(ctx);
};

Map.prototype.loadMap = function(map) {
  for (var i = 0; i < this.cells.length; i++) {
    for (var j = 0; j < this.cells[i].length; j++) {
      switch (map[i][j]) {
        case 9:
          this.cells[i][j] = 0;
          this.criaInimigo(i,j, "enemie");
        break;
        case 144:
          this.cells[i][j] = 0;
          this.criaMoeda(i,j);
        break;
        default:
          this.cells[i][j] = map[i][j];
        break;
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


Map.prototype.criaInimigo = function (l,c, chave) {
  var inimigo = new Sprite();
  inimigo.imageLib = this.imageLib;
  inimigo.poses = [
  {
      key: chave+contador,
      row: 11,
      col: 0,
      colMax: 7,
      time: 8
    },
    {
      key: chave+contador,
      row: 10,
      col: 0,
      colMax: 7,
      time: 8
    },
    {
      key: chave+contador,
      row: 9,
      col: 0,
      colMax: 7,
      time: 8
    },
    {
      key: chave+contador,
      row: 8,
      col: 0,
      colMax: 7,
      time: 8
    },
    {
      key: chave+contador,
      row: 11,
      col: 0,
      colMax: 0,
      time: 8
    },
    {
      key: chave+contador,
      row: 10,
      col: 0,
      colMax: 0,
      time: 8
    },
    {
      key: chave+contador,
      row: 9,
      col: 0,
      colMax: 0,
      time: 8
    },
    {
      key: chave+contador,
      row: 8,
      col: 0,
      colMax: 0,
      time: 8
    },
  ]
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

Map.prototype.criaMoeda = function (l,c) {
  var moeda = new Sprite();
  moeda.imageLib = this.imageLib;
  moeda.poses = [
  {
      key: "coins",
      row: 0,
      col: 0,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 1,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 2,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 3,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 4,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 5,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 6,
      colMax: 7,
      time: 24
    },
    {
      key: "coins",
      row: 0,
      col: 7,
      colMax: 7,
      time: 24
    },
  ]
  moeda.x = (c + 0.5) * this.SIZE;
  moeda.y = (l + 0.5) * this.SIZE;
  this.coins.push(moeda);
};

Map.prototype.desenharMoeda = function(ctx) {
  for (var i = 0; i < this.coins.length; i++) {
    this.coins[i].desenharPoseObjetos(ctx);
  }
}

Map.prototype.moverAnimacao = function(dt) {
  for (var i = 0; i < this.coins.length; i++) {
    this.coins[i].animacao(dt);
  }
}

Map.prototype.tiro = function(x, y, dir){
  if(pc.tiro > 0 ) return;
  var tiro = new Sprite();
  tiro.x = x;
  tiro.y = y;
  tiro.SIZE = 5;
  tiro.color = 'orange';
  pc.tiro = 1;
  tiro.tempo = 1;//Inclui pra adicionar tempo para cada tiro
  switch (dir) {
    case 1:
      pc.pose = 10;
      tiro.vx = -300;
    break;
    case 2:
      pc.pose = 11;
      tiro.vy = -300;
    break;
    case 3:
      pc.pose = 8;
      tiro.vx = +300;
    break;
    case 4:
      pc.pose = 9;
      tiro.vy = +300;
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
    this.tiros[i].tempo = this.tiros[i].tempo - dt;//Incluí para subtraí dt do tempo de cada tiro
    if (this.tiros[i].tempo < 0.8){//no 0.8 eu fixo o tempo que quero que o tiro saia
      this.tiros[i].mover(dt);
    }
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

Map.prototype.testarColisaoMoeda = function(alvo){
  for (var i = 0; i < this.coins.length; i++) {
    if(alvo.colidiuCom(this.coins[i])){
      alvo.vidas++;
      this.coins.splice(i,1);
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
        this.coins.splice(i,1);
      }
    }
  }
  if(this.enemies.length == 0 && pc.x > 840 && pc.x < 887 && pc.y > 327 && pc.y < 344){
    contador = contador + 1;
    if (contador == 1){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 16, 10, 36,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0, 27, 22, 17, 11, 37, 42, 47,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,130,127, 32, 28, 23, 18, 12, 38, 43, 48, 52,134,137,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  0,  0,148,145,151,  0,  0,  0,  0,  0,  0,  0,129,126, 33, 29, 24, 19, 13, 39, 44, 49, 53,133,136,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,149,146,152,  0,  0,  0,  0,  0,  0,  0,128,125, 34, 30, 25, 20, 14, 40, 45, 50, 54,132,135,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,150,147,153,  0,  0,  0,  0,  0,  0,  0,124,116, 35, 31, 26, 21, 15, 41, 46, 51, 55,123,131,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144,  9,  0,115, 56, 57, 58, 59, 60, 61, 62, 63, 64,122,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,114, 65, 66, 67, 68, 69, 70, 71, 72, 73,121,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,154,157,160,  0,  0,  0,  0,113, 74, 75, 76, 77, 78, 79, 80, 81, 82,120,  0,  1],
    [  1,  9,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,155,158,161,  9,  0,  0,  0,112, 83, 84, 85, 86, 87, 88, 89, 90, 91,119,  0,  1],
    [  1,  0,  0,  1,  0,148,145,151,  0,  0,  0,  0,  0,  0,156,159,162,  0,  0,  0,  0,111, 92, 93, 94,138,  0,140, 98, 99,100,118,  0,  1],
    [  1,  0,  1,  1,  0,149,146,152,  0,  0,  0,  0,  0,  0,163,164,165,  0,  0,  0,  0,110,101,102,103,139,  0,141,107,108,109,117,  0,  1],
    [  1,  0,  1,  0,  0,150,147,153,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 2){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,166,167,  0,  0,  1,  0,  0,  0,  0,  0,  0,  9,  1],
    [  1,  0,  1,  0,  0,  0,  0,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,168,169,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,170,171,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,166,167,166,167,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,168,169,168,169,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,143,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,170,171,170,171,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,166,167,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,144,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,168,169,  0,  1],
    [  1,166,167,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  0,  0,  0,  0,170,171,  0,  1],
    [  1,168,169,  0,  0,  0,  0,  9,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  9,  0,  0,  1],
    [  1,170,171,  0,  0,  0,  0,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,172,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 3){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,173,174,  0,  0,  1,  0,144,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,179,  1,  1,  0,  0,  1,  1,  0,175,176,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  9,  0,  0,180,  0,  0,  0,  0,  0,  0,  0,177,178,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  0,  0,  0,  0,  1,  0,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  1,  9,  0,  1,  1,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,179,  0,  0,  0,  0,  0,  0,  0,  1,  0,179,  1],
    [  1,  0,179,  1,  0,  0,  0,  0,173,174,  0,  0,173,174,  0,  0,  0,  0,  0,  0,  0,  0,180,  0,  0,  0,143,  0,  0,  0,  0,  0,180,  1],
    [  1,  0,180,  0,  0,  0,  0,  0,175,176,  0,  0,175,176,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,142,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,177,178,  0,  0,177,178,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  1,  0,  1],
    [  1,  9,  0,  1,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,179,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,180,  0,  1,  1,  0,  9,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 4){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,190,191,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,198,  0,  0,  1,  0,  0,  0,  0,  0,  0,198,  0,  0,  0,192,193,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,198,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,198,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,198,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,198,198,  0,  9,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,181,182,183,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  9,  0,  1,  0,  0,184,185,186,  0,  1,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,187,188,189,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,143,  0,  0,  1,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,198,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,142,  0,  0,  0,  0,  0,  1,  1],
    [  1,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  9,  0,  0,  0,198,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,198,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,198,  0,  0,  0,  0,  0,  0,198,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,198,  0,  0,  0,194,195,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  1,  0,144,  9,  0,  0,  0,  0,  0,  0,  0,  0,196,197,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 5){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,205,206,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,205,206,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,207,208,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,207,208,  0,  0,  1],
    [  1,  0,  0,  0,  1,  9,  0,  0,  0,  1,  9,  0,  0,  0,  0,  9,  0,  0,  0,199,200,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,201,202,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,203,204,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,143,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,205,206,  0,  0,  0,  0,  0,  1,  0,  0,199,200,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,207,208,  0,  0,  0,  9,  0,  1,  0,  0,201,202,  0,  0,  0,  1,  0,  0,  9,  0,  0,  1,  0,  0,  0,  0,144,  0,  0,  0,  0,  1],
    [  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,203,204,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 6){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1,  9,  0,  0,  0,  0,  0,  0,209,210,211,215,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1],
    [  1,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,212,213,214,216,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,217,  0,  1],
    [  1,  0,  0,  0,  0,217,  0,  0,  0,  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,217,  0,  0,  1,  0,  0,  0,218,  0,  1],
    [  1,  0,  1,  0,  0,218,  0,  0,  1,  0,  0,  0,  0,  0,  0,  9,  1,  0,  0,  0,  9,  0,  0,  0,218,  0,  0,  1,  0,  0,  0,  0,  0,  1],
    [  1,  1,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,217,  0,  0,  1,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,218,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  1],
    [  1,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,143,  0,  0,  0,  1,  1,  0,  1],
    [  1,  1,  0,  0,  1,  0,  0,  9,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,  1,  1,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,217,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,217,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,218,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1],
    [  1,  9,218,  0,  0,  1,  0,  0,  0,217,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  1,  0,  0,144,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,218,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 7){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,219,220,221,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  1],
    [  1,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,222,223,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,223,  0,  0,  0,  1,  9,  0,  0,  0,  1],
    [  1,223,  0,  0,219,220,221,  0,  0,  0,  1,  1,144,  0,  0,  0,  0,  1,  0,  0,  0,  9,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,222,223,  0,  1,  9,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,223,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,219,220,221,  1],
    [  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  9,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,222,223,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,223,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,143,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,142,  1,  0,  0,  1,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,223,223,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,219,220,221,  0,  0,  0,  0,223,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  0,  1],
    [  1,222,223,  9,  0,  0,  0,144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  9,  0,  0,  0,223,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 8){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  1,  9,  0,  0,  0,  0,  0,  0,144,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  1,144,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,223,  0,  0,  0,  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,224,223,  0,  1,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,224,  0,  0,  1,  0,  0,  0,  0,  0,224,  0,  1,  0,  1],
    [  1,  0,  1,  0,  1,  0,  0,  0,  1,  0,  0,  0,  1,  9,  0,  1,  1,  0,  0,224,224,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,224,  1,  0,  0,  0,  0,  1,  0,  1,  9,  0,  0,  0,  9,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  0,  1],
    [  1,  0,  1,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,224,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,143,223,  0,  0,  0,  0,  0,  1],
    [  1,224,  0,  0,  0,224,  0,  1,  0,  1,  0,  1,  1,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,142,  9,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  1,  9,  0,  1],
    [  1,  1,  0,  0,  0,  0,  0,  1,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,224,223,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 9){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  0,  0,  0,225,  0,  0,  0,  0,  0,  1,  1,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,225,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  0,  0,  0,  0,225,  0,  0,  0,  0,  0,  0,  1],
    [  1,144,225,  0,  0,  0,  0,  0,224,225,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,225,224,  1,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  1,  0,  9,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,144,  1,  0,  0,  1,  0,  0,225,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  1,  0,  0,  0,  0,144,  0,225,  0,  1],
    [  1,  0,225,  0,  0,  0,225,  0,  0,224,  0,  0,  0,  0,224,  0,  0,  1,  0,  0,  1,  9,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,143,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,224,  0,  0,  1],
    [  1,  1,  0,  0,  0,  1,  0,  0,  0,  1,224,  0,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  0,  0,  0,  0,  0,  0,  1,  0,  1],
    [  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,224,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,225,224,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  0,  0,  9,  0,  0,  1,225,  0,  0,  0,  0,  0,  0,  0,  0,  1,  9,  1],
    [  1,  0,  0,  0,  1,  9,  0,  0,  0,  0,  0,  0,  0,225,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
  ])
    } else if (contador == 10){
      fases = ([
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  9,  1,  0,  0,  0,  0,  9,  0,  0,  0,229,  0,  0,  0,  0,  0,230,  1],
    [  1,  0,  0,  0,  0,  0,  0,  1,  9,  1,  1,  0,  0,  0,  0,  0,  1,  0,  0,227,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  1],
    [  1,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,226,227,  0,230,  0,  1,  0,  1,  1,  0,  0,  0,230,  0,  0,  0,  0,  1,  0,  1,  0,  0,  1],
    [  1,  0,  0,  0,  0,229,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,230,  0,  0,  0,  0,  1,  0,230,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,228,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,226,  1],
    [  1,  0,  0,  0,  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  9,  0,  0,  9,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  0,  0,  1,  1,  0,  0,  0,  0,  9,  0,229,144,  0,  0,  0,230,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,226,  0,  0,  0,  1,  1,  0,230,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  1,  0,  1,  0,  0,143,  0,  1,  0,  0,  0,  0,  1],
    [  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,142,  0,  0,  0,  0,  0,  0,  1],
    [  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,230,  0,  0,  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,228,  0,227,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,229,144,  1],
    [  1,  0,  1,  0,  0,  1,  1,  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,226,  9,  0,229,  0,  1,  0,  0,  0,  0,227,  0,  1],
    [  1,144,  0,  0,  0,  0,  0,  0,  0,  0,  0,226,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  1,  0,  9,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
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

Map.prototype.acabou = function(ctx, pc){
  if(contador > 10){
  	cancelAnimationFrame(id);
    for (var i = 0; i < this.cells.length; i++) {
      var linha = this.cells[i];
      for (var j = 0; j < linha.length; j++) {
        ctx.clearRect(j * this.SIZE, i * this.SIZE, this.SIZE, this.SIZE);
      }
    }
    tela.style.border = "thick solid #843232";
    ctx.fillStyle = "#d2c41d";
    ctx.strokeStyle = "black";
    ctx.font = "3em fantasy";
    var texto = "Parabéns!";
    ctx.fillText(texto, 800, 350);
    ctx.strokeText(texto, 800, 350);
    var texto = "Você Venceu!";
    ctx.fillText(texto, 770, 450);
    ctx.strokeText(texto, 770, 450);
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
    ctx.fillText(texto, 110, 150);
    ctx.strokeText(texto, 110, 150);
    var texto = "Você Perdeu!";
    ctx.fillText(texto, 80, 250);
    ctx.strokeText(texto, 80, 250);
  }
}
