class Pipes {
  constructor() {
    this.pipeTopSource = {
      x: 432,
      y: 110,
      width: sizePipe[0],
      height: sizePipe[1],
    };
    this.pipeBottomSource = {
      x: 434 + sizePipe[0],
      y: 110,
      width: sizePipe[0],
      height: sizePipe[1],
    };
    this.pipeTopResult = {
      width: sizePipe[0],
      height: sizePipe[1],
    };
    this.pipeBottomResult = {
      width: sizePipe[0],
      height: sizePipe[1],
    };
  }

  drawPipe() {
    if (startGame) {
      for (let i = 0; i < pipe.length; i++) {
        pipe[i].x--;

        if (pipe[i].x == birdPositionX)
          pipe.push({
            x: canvas.width,
            y: Math.random() * -350,
          });

        if (pipe[i].x == birdPositionX) {
          score++;
          scor.play();
        }

        ctx.drawImage(
          img,
          this.pipeTopSource.x,
          this.pipeTopSource.y,
          this.pipeTopSource.width,
          this.pipeTopSource.height,
          pipe[i].x,
          pipe[i].y,
          this.pipeTopResult.width,
          this.pipeTopResult.height
        );

        ctx.drawImage(
          img,
          this.pipeBottomSource.x,
          this.pipeBottomSource.y,
          this.pipeBottomSource.width,
          this.pipeBottomSource.height,
          pipe[i].x,
          pipe[i].y + (sizePipe[1] + gap),
          this.pipeBottomResult.width,
          this.pipeBottomResult.height
        );
      }
    }
  }
}
