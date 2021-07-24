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
    console.log(this.player.kiBlastArray);

    if (this.player.blast) {
      this.player.kiBlastArray.forEach((kiBlast) => {
        kiBlast.drawBlast();
        kiBlast.x += 5;
      });
    }
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
