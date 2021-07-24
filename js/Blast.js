class Blast {
  constructor(x, y, w, h, img, context, velocity) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.img = new Image();
    this.img.src = img;
    this.velocity = velocity;
  }
  drawBlast() {
    this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  update(enemyX, enemyY) {
    this.drawBlast();
    this.x = enemyX + this.velocity.x;
    this.y = enemyY + this.velocity.y;
  }
}
