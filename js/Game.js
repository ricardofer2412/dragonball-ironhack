// const canvas = document.querySelector("canvas");
// console.log(canvas);
// const context = canvas.getContext("2d");

class Game {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.player = new Player(25, 350, 40, 75, "../images/goku1.png");
    this.background = new Image();
  }

  start() {
    this.drawBackground(this.context, this.background);
    this.drawLoop();
    this.player.move(this.context);
  }

  drawLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.player.draw(this.context);
    requestAnimationFrame(() => {
      this.drawLoop();
    });
  }

  //   requestAnimationFrame(this.drawLoop);
  // }

  drawBackground(context, background) {
    console.log("background");

    background.onload = function () {
      context.drawImage(background, 0, 0);
    };
    this.background.src = "../images/Namek.png";
  }
}

// Uncaught ReferenceError: Game is not defined
