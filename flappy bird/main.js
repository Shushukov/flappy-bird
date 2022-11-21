const imgURL = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = new Image();
img.src = imgURL;

const scor = new Audio();
scor.src = "sound/score.mp3";

const speed = 4;
const size = [51, 36];
const sizePipe = [77, 500];
const gravity = 0.5;
const jump = -6;
const gap = 200;
const birdPositionX = canvas.width / 6;
let birdPositionY = canvas.height / 2 - size[1] / 2;
let flight = jump;
let index = 0;
let startGame = false;
let score = 0;
let pipe = [];
pipe[0] = {
  x: canvas.width + sizePipe[0],
  y: 0,
};

background = new Backgroud();
bird = new Bird();
pipes = new Pipes();

const render = () => {
  index += 0.5;

  background.object();
  background.drawPartOne();
  background.drawPartTwo();
  bird.option();
  bird.draw();
  bird.inpactOnThePipe();
  bird.downToTheFloor();
  pipes.drawPipe();

  if (startGame) {
    ctx.fillText(`Best Score : ${localStorage.getItem("score")}`, 250, 30);
    ctx.fillText(`Score : ${score}`, 250, 60);
    ctx.font = "bold 20px verdana";
  }

  window.requestAnimationFrame(render);
};

img.onload = render;
document.addEventListener("click", () => (startGame = true));
window.onclick = () => (flight = jump);
