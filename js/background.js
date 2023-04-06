class Background {
  constructor() {
    this.img = null;
    this.img1 = null;
    this.x = 0;
    this.speed = -4;
  }

  preload() {
    this.img = loadImage("./assets/background.png");
    //this.img1 = loadImage("../assets/background flipped.png");
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

