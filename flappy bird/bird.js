class Bird {
  constructor() {}
  option() {
    this.birdSource = {
      x: 432,
      y: Math.floor((index % 9) / 3) * size[1],
      width: size[0],
      height: size[1],
    };

    this.birdResult = {
      x: canvas.width / 2 - size[0] / 2,
      y: canvas.height / 2 - size[0] / 2,
      width: size[0],
      height: size[1],
    };
  }

  draw() {
    if (startGame) {
      ctx.drawImage(
        img,
        this.birdSource.x,
        this.birdSource.y,
        this.birdSource.width,
        this.birdSource.height,
        (this.birdResult.x = birdPositionX),
        (this.birdResult.y = birdPositionY),
        this.birdResult.width,
        this.birdResult.height
      );

      flight += gravity;
      birdPositionY = Math.min(birdPositionY + flight, canvas.height - size[1]);
    } else {
      ctx.drawImage(
        img,
        this.birdSource.x,
        this.birdSource.y,
        this.birdSource.width,
        this.birdSource.height,
        this.birdResult.x,
        this.birdResult.y,
        this.birdResult.width,
        this.birdResult.height
      );
      ctx.fillText(`Best score : ${localStorage.getItem("score")}`, 120, 245);
      ctx.fillText("Click to play", 120, 535);
      ctx.font = "bold 30px verdana";
    }
  }

  inpactOnThePipe() {
    for (let i = 0; i < pipe.length; i++) {
      if (
        birdPositionX + size[0] >= pipe[i].x &&
        birdPositionX <= pipe[i].x + sizePipe[0] &&
        (birdPositionY <= pipe[i].y + sizePipe[1] ||
          birdPositionY + size[1] >= pipe[i].y + (sizePipe[1] + gap))
      ) {
        let highScore = parseFloat(localStorage.getItem("score"));
        highScore = highScore > score ? highScore : score;
        localStorage.setItem("score", highScore);
        location.reload();
      }
    }
  }
  downToTheFloor() {
    if (birdPositionY >= canvas.height - size[1]) {
      let highScore = parseFloat(localStorage.getItem("score"));
      highScore = highScore > score ? highScore : score;
      localStorage.setItem("score", highScore);
      location.reload();
    }
  }
}
