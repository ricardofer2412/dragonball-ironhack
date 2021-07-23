class Blast {
  constructor(x, y, w, h, imageSrc, context) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = new Image();
    this.img.src = "./images/kiBlast1.png";
  }
  draw() {
    this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
