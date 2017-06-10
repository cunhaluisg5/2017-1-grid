var tela;
var ctx;
var antes = new Date();
var agora = new Date();
var dt = 0;
var mapa;
var pc;
var aux = 1;
var vidas = 3;
var imglib;
var start = 1;
var contador = 1;

function init() {
  tela = document.getElementsByTagName('canvas')[0];
  tela.width = 640;
  tela.height = 480;
  ctx = tela.getContext('2d');
  soundLib = new SoundLoader();
  imglib = new ImageLoader();

  soundLib.load("arrow", "mp3/arrow.mp3");
  soundLib.load("arc", "mp3/arc.mp3");
  soundLib.load("man", "mp3/man.mp3");
  soundLib.load("woman", "mp3/woman.mp3");
  soundLib.load("coins", "mp3/coins.mp3");
  soundLib.load("perdeu", "mp3/perdeu.mp3");
  soundLib.load("proximo", "mp3/proximo.mp3");
  soundLib.load("venceu", "mp3/venceu.mp3");
  soundLib.load("ouch", "mp3/ouch.mp3");

  imglib.load("pc", "imagens/pc.png");
  imglib.load("piso_muro", "imagens/piso_muro.png");
  imglib.load("architecture", "imagens/architecture.png");
  imglib.load("terrain", "imagens/terrain.png");
  imglib.load("objetos", "imagens/obj_misk_atlas.png");
  imglib.load("coins", "imagens/coins.png");
  imglib.load("enemie1", "enemies/enemie1.png");
  imglib.load("enemie2", "enemies/enemie2.png");
  imglib.load("enemie3", "enemies/enemie3.png");
  imglib.load("enemie4", "enemies/enemie4.png");
  imglib.load("enemie5", "enemies/enemie5.png");
  imglib.load("enemie6", "enemies/enemie6.png");
  imglib.load("enemie7", "enemies/enemie7.png");
  imglib.load("enemie8", "enemies/enemie8.png");
  imglib.load("enemie9", "enemies/enemie9.png");
  imglib.load("enemie10", "enemies/enemie10.png");

  mapa = new Map(16, 34);
  mapa.imageLib = imglib;
  pc = new Sprite();
  pc.imageLib = imglib;
  pc.x = 50;
  pc.y = 90;
  pc.dir = 3;
  configuraControles();

  var id = requestAnimationFrame(passo);
}

function passo() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, tela.width, tela.height);
  ctx.scale(1.5, 1.5);
  ctx.translate((Math.min(tela.width / 4 - pc.x, 0)),Math.min(tela.height / 4 - pc.y, 0));
  id = requestAnimationFrame(passo);
  agora = new Date();
  dt = (agora - antes) / 1000;

  if(start == 2){
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
    mapa.testarFim(mapa);
  }

  mapa.info(id);
  antes = agora;
  ctx.restore();
  if(start != 1 && start != 3 && start != 5){
    mapa.desenhaTopo();
  }
}

function configuraControles() {
  addEventListener("keydown", function(e) {
    if (pc.tiro < 0.5){
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
          if(aux == 1){
            mapa.tiro(pc.x, pc.y, pc.dir);
            pc.vx = 0;
            pc.vy = 0;
          }
          e.preventDefault();
          break;
        case 80:
          if(aux == 1 && start == 2){
          var txt = "Jogo Pausado! ";
          
          ctx.fillStyle = "#9AC0CD";
          ctx.globalAlpha = 0.75;
          ctx.fillRect(0, 0, tela.width, tela.height);                    
          ctx.font = "3em fantasy";
          ctx.fillStyle = "darkRed";
          ctx.fillText(txt, (tela.width / 4), (tela.height / 2));
          cancelAnimationFrame(id);                    
          aux = 2;
        }
        else if(aux == 2){ 
          ctx.globalAlpha = 1;                   
          antes = new Date();                      
          requestAnimationFrame(passo);          
          aux = 1;            
        }
      break;
        case 13:
          if(contador == 1 && start == 1){            
            start = 2;
            mapa.enemies.length = 0;
            fases = ([
            [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
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
            ]); 
            mapa.loadMap(fases);           
          }else if((vidas == 0 && start == 3) || start == 4){
            contador = 1;
            start = 1;
            vidas = 3;
          }else if(aux == 4){
            start = 2;
            aux = 1;
          }
      break;
      }
    }
  });

  addEventListener("keyup", function(e) {
    if (pc.tiro < 0.5){
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
