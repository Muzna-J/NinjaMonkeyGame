class Background {
  constructor() {
    this.img = null;
    this.x = 0;
    this.speed = -4;
  }

  preload() {
    this.img = loadImage("./assets/background.png");
  }

  draw() {
    image(this.img, this.x, 0, width, height);
    image(this.img, this.x + width, 0, width, height);
  }

  update() {
    this.x += this.speed;
    if (this.x <= -width) {
      this.x = 0;
    }
  }
}

