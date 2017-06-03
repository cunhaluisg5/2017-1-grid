var tela;
var ctx;
var antes = 0;
var dt = 0;
var mapa;
var pc;
var imglib;

function init() {
  tela = document.getElementsByTagName('canvas')[0];
  tela.width = 1088;
  tela.height = 512;
  ctx = tela.getContext('2d');
  imglib = new ImageLoader();
  imglib.load("pc", "pc.png");
  imglib.load("piso_muro", "Imagens/piso_muro.png");
  imglib.load("architecture", "Imagens/architecture.png");
  imglib.load("terrain", "Imagens/terrain.png");
  imglib.load("coins", "Imagens/coins.png");
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
  contador = 1
  open = 0;
  mapa = new Map(16, 34);
  mapa.imageLib = imglib;
  fases = ([
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, 16, 10, 36,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 27, 22, 17, 11, 37, 42, 47,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,130,127, 32, 28, 23, 18, 12, 38, 43, 48, 52,134,137,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,129,126, 33, 29, 24, 19, 13, 39, 44, 49, 53,133,136,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,128,125, 34, 30, 25, 20, 14, 40, 45, 50, 54,132,135,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,124,116, 35, 31, 26, 21, 15, 41, 46, 51, 55,123,131,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144,  0,  0,115, 56, 57, 58, 59, 60, 61, 62, 63, 64,122,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,114, 65, 66, 67, 68, 69, 70, 71, 72, 73,121,  0,  1],
    [  1,  0,  0,  0,  0,  0,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,113, 74, 75, 76, 77, 78, 79, 80, 81, 82,120,  0,  1],
    [  1,  9,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,112, 83, 84, 85, 86, 87, 88, 89, 90, 91,119,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,111, 92, 93, 94,138,  0,140, 98, 99,100,118,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,110,101,102,103,139,  0,141,107,108,109,117,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
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
var k =0;
function passo(t) {
  dt = (t - antes) / 1000;
  ctx.clearRect(0, 0, tela.width, tela.height);
  id = requestAnimationFrame(passo);
  topoJogo(id);
  mapa.persegue(pc);
  mapa.testarColisao(pc);
  mapa.testarColisaoMoeda(pc);
  mapa.testarColisaoTiros(mapa);
  pc.moverOnMap(mapa, dt);
  mapa.moverInimigosOnMap(mapa, dt);
  mapa.moverTiros(mapa, dt);
  mapa.desenhar(ctx);
  mapa.desenharTiros(ctx);
  pc.desenhar(ctx);
  mapa.moverAnimacao(dt);
  //imglib.drawImageTile(ctx, "en", 3, 0, 64, 0, 0);
  mapa.testarFim(mapa);
  mapa.acabou(ctx, pc);
  mapa.verificaPerdeu(pc);
  antes = t;
}

function topoJogo(id){
  var vida = document.getElementById("Vida");
    vida.innerText = pc.vidas;
    var nivel = document.getElementById("Nivel");
    nivel.innerText = contador;
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
        if (pc.vx == 0){
          pc.pose = 3;
        }else if (pc.vx > 0){
          pc.pose = 0;
        }else if (pc.vx < 0){
          pc.pose = 2;
        }
        pc.dir = 2;
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
        if (pc.vx == 0){
          pc.pose = 1;
        }else if (pc.vx > 0){
          pc.pose = 0;
        } else if (pc.vx < 0){
          pc.pose = 2;
        }
        pc.dir = 4;
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
        if (pc.vy == 0){
          pc.pose = 6;
        }else if (pc.vy > 0){
          pc.pose = 1;
        }else if (pc.vy < 0){
          pc.pose = 3;
        }
        e.preventDefault();
        break;
      case 39:
        pc.vx = 0;
        if (pc.vy == 0){
          pc.pose = 4;
        }else if (pc.vy > 0){
          pc.pose = 1;
        }else if (pc.vy < 0){
          pc.pose = 3;
        }
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
