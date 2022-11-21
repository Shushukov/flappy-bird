class Backgroud {
  constructor() {}
  object() {
    this.backgroudX = -((index * speed) % canvas.width);
    this.bgSource = {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    };
    this.bgPartOneResult = {
      x: this.backgroudX + canvas.width,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    };
    this.bgPartTwoResult = {
      x: this.backgroudX,
      y: 0,
      width: canvas.width,
      height: canvas.height,
    };
  }
  drawPartOne() {
    ctx.drawImage(
      img,
      this.bgSource.x,
      this.bgSource.y,
      this.bgSource.width,
      this.bgSource.height,
      this.bgPartOneResult.x,
      this.bgPartOneResult.y,
      this.bgPartOneResult.width,
      this.bgPartOneResult.height
    );
  }
  drawPartTwo() {
    ctx.drawImage(
      img,
      this.bgSource.x,
      this.bgSource.y,
      this.bgSource.width,
      this.bgSource.height,
      this.bgPartTwoResult.x,
      this.bgPartTwoResult.y,
      this.bgPartTwoResult.width,
      this.bgPartTwoResult.height
    );
  }
}
