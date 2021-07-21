class Player {
  constructor(x, y, w, h, imageSrc) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = imageSrc;
    this.kiBlast1 = new Image();
  }

  draw(context) {
    context.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  drawKiBlast(context) {
    context.drawImage(this.kiBlast1, 0, 0);
  }

  // flyUp() {
  //   let gokuUp = [];
  //   gokuUp.length = 2;

  //   for (let i = 1; i < gokuUp.length; i++) {
  //     gokuUp[i] = new Image();
  //     gokuUp[i].src = "../images/flyUp/goku" + i.toString() + ".png";
  //   }
  //   let i = 1;

  //   setInterval(function () {
  //     i++;
  //     if (i >= 2) {
  //       i = 1;
  //     }
  //     context.drawImage(gokuUp[i], 40, 75);
  //   }, 100);
  // }

  move(context) {
    document.addEventListener("keyup", (event) => {
      this.img.src = "../images/goku1.png";
    });

    document.addEventListener("keydown", (event, context) => {
      //   console.log(event.code);
      switch (event.code) {
        case "ArrowRight":
          this.x += 10;
          this.img.src = "../images/goku2.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowLeft":
          if (this.x > -2) this.x -= 10;
          this.img.src = "../images/gokuBack.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowUp":
          this.y -= 10;
          // this.flyUp();
          this.img.src = "../images/gokuUp.png";
          this.w = 40;
          this.h = 75;
          break;
        case "ArrowDown":
          this.y += 10;
          this.img.src = "../images/gokuDown.png";
          this.w = 40;
          this.h = 75;
          break;
        case "KeyA":
          this.img.src = "../images/gokuAttack.png";
          // this.drawKiBlast();
          this.kiBlast1.src = "../images/kiBlast1.png";

          context.drawImage(this.kiBlast1, 0, 0);
        default:
          console.log("Are you even moving?!?!");
      }
    });
  }
}

// class Player extends Component {
//   constructor(classGame, x, y, w, h, imageScr) {
//     super(classGame, x, y, w, h, imageScr);
//   }

//
// }
