class Component {
  constructor(x, y, w, h, imageScr, context) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
    this.img.scr = imageScr;
  }

  drawComponent() {
    console.log(this.img);

    this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
