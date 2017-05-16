var tela;
var ctx;
var antes = 0;
var dt = 0;
var mapa;
var pc;
function init(){
  tela = document.getElementsByTagName('canvas')[0];
  tela.width = 600;
  tela.height = 520;
  ctx = tela.getContext('2d');
  contador = 1;
  fases = ([
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
  ]);
  mapa = new Map(13, 15);
  mapa.loadMap(fases);
  pc = new Sprite();
  pc.x = 50;
  pc.y = 90;
  pc.dir = 3;
  pc.color = "blue";
  configuraControles();
  console.log("Fase: " + contador);
  var id = requestAnimationFrame(passo);
}

function passo(t){
  dt = (t - antes)/1000;
  ctx.clearRect(0,0, tela.width, tela.height);
  id = requestAnimationFrame(passo);
  pc.desenhaVidas();
  pc.desenhaNivel();
  mapa.persegue(pc);
  mapa.testarColisao(pc);
  mapa.testarColisaoTiros(mapa);
  pc.moverOnMap(mapa, dt);
  mapa.moverInimigosOnMap(mapa, dt);
  mapa.moverTiros(mapa, dt);
  mapa.desenhar(ctx);
  pc.desenhar(ctx);
  mapa.testarFim(mapa);
  mapa.acabou(ctx, pc);
  mapa.verificaPerdeu(pc);
  antes = t;
}

function configuraControles(){
  addEventListener("keydown", function(e){
    switch (e.keyCode) {
      case 37:
          pc.vx = -100;
          pc.dir = 1;
          e.preventDefault();
        break;
      case 38:
          pc.vy = -100;
          pc.dir = 2;
          e.preventDefault();
        break;
      case 39:
          pc.vx = +100;
          pc.dir = 3;
          e.preventDefault();
        break;
      case 40:
          pc.vy = +100;
          pc.dir = 4;
          e.preventDefault();
        break;
      case 32:
        mapa.tiro(pc.x, pc.y, pc.dir);
        e.preventDefault();
        break;
    }
  });
  
  addEventListener("keyup", function(e){
    switch (e.keyCode) {
      case 37:
      case 39:
          pc.vx = 0;
          e.preventDefault();
        break;
      case 38:
      case 40:
          pc.vy = 0;
          e.preventDefault();
        break;
    }
  });
}