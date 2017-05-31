var tela;
var ctx;
var antes = 0;
var dt = 0;
var mapa;
var pc;
var imglib;

function init() {
  tela = document.getElementsByTagName('canvas')[0];
  tela.width = 480;
  tela.height = 416;
  ctx = tela.getContext('2d');
  imglib = new ImageLoader();
  imglib.load("pc", "pc.png");
  imglib.load("enemie1", "Enemies/enemie1.png");
  imglib.load("enemie2", "Enemies/enemie2.png");
  imglib.load("enemie3", "Enemies/enemie3.png");
  imglib.load("enemie4", "Enemies/enemie4.png");
  imglib.load("enemie5", "Enemies/enemie5.png");
  imglib.load("enemie6", "Enemies/enemie6.png");
  imglib.load("enemie7", "Enemies/enemie7.png");
  imglib.load("enemie8", "Enemies/enemie8.png");
  imglib.load("enemie9", "Enemies/enemie9.png");
  imglib.load("enemie10", "Enemies/enemie10.png");
  imglib.load("floor", "LPC Base Assets/tiles/dirt2.png");
  imglib.load("mountain", "LPC Base Assets/tiles/mountains.png");
  contador = 1;
  mapa = new Map(13, 15);
  mapa.imageLib = imglib;
  fases = ([
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
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
  mapa.loadMap(fases);
  pc = new Sprite();
  pc.imageLib = imglib;
  pc.x = 50;
  pc.y = 90;
  pc.dir = 3;
  configuraControles();

  var id = requestAnimationFrame(passo);
}

function passo(t) {
  dt = (t - antes) / 1000;
  ctx.clearRect(0, 0, tela.width, tela.height);
  id = requestAnimationFrame(passo);
  mapa.persegue(pc);
  mapa.testarColisao(pc);
  mapa.testarColisaoTiros(mapa);
  pc.moverOnMap(mapa, dt);
  mapa.moverInimigosOnMap(mapa, dt);
  mapa.moverTiros(mapa, dt);
  mapa.desenhar(ctx);
  mapa.desenharTiros(ctx);
  pc.desenhar(ctx);
  //imglib.drawImageTile(ctx, "en", 3, 0, 64, 0, 0);
  pc.desenhaVidas();
  pc.desenhaNivel();
  mapa.testarFim(mapa);
  mapa.acabou(ctx, pc);
  mapa.verificaPerdeu(pc);
  antes = t;
}

function configuraControles() {
  addEventListener("keydown", function(e) {
    if (pc.tiro < 0.5){//Inclui para não permitir movimento enquanto atira
    switch (e.keyCode) {
      case 37:
        pc.vx = -100;
        pc.dir = 1;
        pc.pose = 2;
        e.preventDefault();
        break;
      case 38:
        pc.vy = -100;
        pc.dir = 2;
        pc.pose = 3;
        e.preventDefault();
        break;
      case 39:
        pc.vx = +100;
        pc.dir = 3;
        pc.pose = 0;
        e.preventDefault();
        break;
      case 40:
        pc.vy = +100;
        pc.dir = 4;
        pc.pose = 1;
        e.preventDefault();
        break;
    case 32:
        mapa.tiro(pc.x, pc.y, pc.dir);
        pc.vx =0;//Inclui para parar o movimento enquanto atira
        pc.vy = 0;//Inclui para parar o movimento enquanto atira
        e.preventDefault();
        break;
      default:
    }
  }
  });
  addEventListener("keyup", function(e) {
    if (pc.tiro < 0.5){//Inclui para não permitir movimento enquanto atira
    switch (e.keyCode) {
      case 37:
        pc.vx = 0;
        pc.pose = 6;
        e.preventDefault();
        break;
      case 39:
        pc.vx = 0;
        pc.pose = 4;
        e.preventDefault();
        break;
      case 38:
        pc.vy = 0;
        pc.pose = 7;
        e.preventDefault();
        break;
      case 40:
        pc.vy = 0;
        pc.pose = 5;
        e.preventDefault();
        break;
      default:
    }
  }
  });
}
