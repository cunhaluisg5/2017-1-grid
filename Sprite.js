function Sprite() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.SIZE = 15;
}

Sprite.prototype.desenhar = function(ctx) {
  ctx.fillStyle = "blue";
  ctx.fillRect(
    this.x - this.SIZE / 2,
    this.y - this.SIZE / 2,
    this.SIZE, this.SIZE
  );
  ctx.strokeStyle = "white";
  ctx.strokeRect(
    this.x - this.SIZE / 2,
    this.y - this.SIZE / 2,
    this.SIZE, this.SIZE
  );
};


Sprite.prototype.mover = function (dt) {
  this.x = this.x + this.vx*dt;
  this.y = this.y + this.vy*dt;
};
