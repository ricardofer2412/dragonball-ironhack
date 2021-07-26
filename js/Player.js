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

    this.img.src = "images/enemies/topp1.png";

    // const randomNum = Math.floor(Math.random() * 100);
    // if (randomNum % 30 === 0) {
    //   this.randomMoveX =
    //     Math.floor(Math.random() * width) % 5 === 0
    //       ? Math.floor(Math.random() * 5)
    //       : -Math.floor(Math.random() * 5);
    //   this.randomMoveY =
    //     Math.floor(Math.random() * height) % 5 === 0
    //       ? Math.floor(Math.random() * 5)
    //       : -Math.floor(Math.random() * 5);
    // } else if (randomNum % 5 === 0) {
    //   this.randomMoveX = 0;
    //   this.randomMoveY = 0;
    // }
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
      this.img.src = "../images/goku1.png";
    });

    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowRight":
          if (this.x < 900 && this.x !== enemyX - 50) this.x += 50;
          this.img.src = "../images/goku2.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowLeft":
          if (this.x > 50) this.x -= 50;
          this.img.src = "../images/gokuBack.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowUp":
          if (this.y > 50) this.y -= 50;
          // this.flyUp();
          this.img.src = "../images/gokuUp.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowDown":
          if (this.y < 400) this.y += 50;
          this.img.src = "../images/gokuDown.png";
          this.w = 40;
          this.h = 75;
          break;
        case "Space":
          this.img.src = "../images/gokuAttack.png";
          this.blast = new Blast(
            this.x + 2,
            this.y,
            50,
            50,
            "./images/kiBlast1.png",
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
