class Player {
  constructor(x, y, w, h, imageSrc, context, health) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = imageSrc;
    this.blast;
    this.kiBlastArray = [];
    this.enemyKiBlastArray = [];
    this.health = health;
    this.randomMoveX = 0;
    this.randomMoveY = 0;
    this.enemyAttackKi;
  }

  draw() {
    this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  randomMove() {
    const random = Math.floor(Math.random() * 400);

    this.y = random;

    this.img.src = "images/enemies/attack1.png";
  }
  enemyBlast() {
    this.enemyAttackKi = new Blast(
      this.x,
      this.y,
      100,
      25,
      "images/enemies/attack/blast.png",
      this.context,
      {
        x: 1,
        y: 1,
      }
    );
    this.enemyKiBlastArray.push(
      new Blast(
        this.x - 60,
        this.y + 10,
        100,
        25,
        "images/enemies/attack/blast.png",
        this.context,
        { x: 1, y: 1 }
      )
    );
  }

  move(enemyX, enemyY) {
    document.addEventListener("keyup", (event) => {
      this.img.src = "images/goku1.png";
    });

    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowUp":
          if (this.y > 50) this.y -= 50;
          this.img.src = "images/gokuUp.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowDown":
          if (this.y < 400) this.y += 50;
          this.img.src = "images/gokuDown.png";
          this.w = 40;
          this.h = 75;
          break;
        case "Space":
          this.img.src = "images/gokuAttack.png";
          this.blast = new Blast(
            this.x + 2,
            this.y,
            50,
            50,
            "images/kiBlast1.png",
            this.context,
            {
              x: 1,
              y: 1,
            }
          );

          this.kiBlastArray.push(
            new Blast(
              this.x + 5,
              this.y,
              50,
              50,
              "./images/kiBlast1.png",
              this.context,
              { x: 1, y: 1 }
            )
          );

        default:
          console.log("Are you even moving?!?!");
      }
    });
  }
}
