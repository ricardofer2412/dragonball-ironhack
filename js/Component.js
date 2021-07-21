class Component {
  constructor(classGame, x, y, w, h, imageScr) {
    this.game = classGame;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
    this.img.scr = imageScr;
  }

  drawComponent() {
    this.game.context.drawComponent(
      this.img,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
