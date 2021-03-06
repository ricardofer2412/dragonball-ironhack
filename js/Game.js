class Game {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.player = new Player(
      100,
      350,
      40,
      75,
      "./images/goku1.png",
      this.context,
      100
    );

    this.enemy1 = new Player(
      800,
      350,
      60,
      70,
      "./images/enemies/topp1.png",
      this.context,
      100
    );
    this.blast;
    this.background = new Image();
    this.background.src = "./images/tournament.png";
    this.enemyAttackKi;
    this.startImg = new Image();
    this.startImg.src = "./images/startImg.jpeg";
    this.startLogo = new Image();
    this.startLogo.src = "./images/canvastart.png";
    this.startGameButton = document.getElementById("start-button");
  }

  randomPlayerMove() {
    this.player.move(this.enemy1.x, this.enemy1.y);

    if (this.enemy1.health > 60) {
      setInterval(() => {
        this.enemy1.randomMove();
        this.enemy1.enemyBlast();
      }, 500);
    } else if (this.enemy1.health > 59) {
      setInterval(() => {
        this.enemy1.randomMove();
        this.enemy1.enemyBlast();
      }, 2000);
    } else if (this.enemy1.health < 35) {
      setInterval(() => {
        this.enemy1.randomMove();
        this.enemy1.enemyBlast();
      }, 500);
    }
  }

  enemy1Health() {
    this.context.font = "20px Georgia";
    this.context.fillStyle = "white";

    this.context.fillText("Topp", 700, 50);
    this.context.font = "20px Georgia white";
    this.context.fillStyle = "white";

    this.context.fillText(this.enemy1.health, 800, 50);
  }

  playerHealth() {
    this.context.font = "20px Georgia";
    this.context.fillStyle = "white";
    this.context.fillText("Goku", 100, 50);
    this.context.font = "20px Georgia";
    this.context.fillStyle = "white";

    this.context.fillText(this.player.health, 200, 50);
  }

  enemyAttack() {
    this.enemy1.enemyBlast();
  }

  drawLoop() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.enemy1Health();
    this.playerHealth();
    this.player.draw();

    this.enemy1.draw();
    if (this.enemy1.enemyAttackKi) {
      this.enemy1.enemyKiBlastArray.forEach((enemyKiBlastAttack) => {
        enemyKiBlastAttack.drawBlast();
        enemyKiBlastAttack.x -= 5;
      });
      this.enemy1.enemyKiBlastArray.forEach((enemyKiBlastAttack, index) => {
        const playerDist = Math.hypot(
          this.player.x - enemyKiBlastAttack.x,
          this.player.y - enemyKiBlastAttack.y
        );

        if (playerDist < 50) {
          console.log("hit");
          this.enemy1.enemyKiBlastArray.splice(index, 1);
          this.player.health -= 10;
          console.log(this.player.health);
          if (this.player.health === 0) {
            this.gameOver();
          }
        }
      });
    }
    if (this.player.blast) {
      this.player.kiBlastArray.forEach((kiBlast) => {
        kiBlast.drawBlast();
        kiBlast.x += 5;
      });

      this.player.kiBlastArray.forEach((kiBlast, index) => {
        const dist = Math.hypot(
          kiBlast.x - this.enemy1.x,
          kiBlast.y - this.enemy1.y
        );
        if (dist < 50) {
          console.log("Hit");
          this.player.kiBlastArray.splice(index, 1);
          this.enemy1.health -= 10;
          console.log(this.enemy1.health);
        }
        if (this.enemy1.health === 0) {
          this.gameOver();
        }
      });
    }

    if (this.enemy1.health > 0 && this.player.health > 0) {
      requestAnimationFrame(() => {
        this.drawLoop();
      });
    }
  }

  gameOver() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawBackground();
    this.context.font = "100px Georgia";
    this.context.fillText("GAME OVER", 200, 250);
    if (this.enemy1.health === 0) {
      this.context.font = "50px Georagia";
      this.context.fillText("YOU WIN", 380, 400);
    }
    if (this.player.health === 0) {
      this.context.font = "50px Georagia";
      this.context.fillText("YOU LOSE", 380, 400);
    }
    this.startGameButton.style.display = "block";
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
