// const canvas = document.querySelector("canvas");
// console.log(canvas);
// const context = canvas.getContext("2d");

class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.player = new Player(
      25,
      350,
      40,
      75,
      "./images/goku1.png",
      this.context
    );

    this.enemy1 = new Player(
      500,
      200,
      50,
      70,
      "./images/enemies/topp1.png",
      this.context
    );
    this.background = new Image();
    this.background.src = "./images/Namek.png";
    this.score = 0;
    this.blast = new Blast(
      500,
      100,
      50,
      50,
      "./images/enemies/topp1.png",
      this.context
    );
  }

  start() {
    this.drawLoop();
    this.player.move();
  }

  drawLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.player.draw();
    this.enemy1.draw();

    addEventListener("click", (event) => {
      console.log(event);
      // const blast = this.blast;
    });

    requestAnimationFrame(() => {
      this.drawLoop();
    });
  }

  drawBackground() {
    this.context.drawImage(
      this.background,
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}

// Uncaught ReferenceError: Game is not defined
