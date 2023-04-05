class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      this.backgroundImage = null;
      this.playerImage = null;
      this.obstacleImage = null;
      this.obstacles = [];
      this.coconutImage= null;
      this.coconuts= [];
      this.heartImage= null;
      this.hearts= [];
      this.playerLives= 3;
    }
    preload() {
        this.background.preload();
        this.backgroundImage = loadImage("./assets/background.png", "../assets/background flipped.png");
        this.playerImage = loadImage("./assets/ninja monkey right.png");
        this.obstacleImage = loadImage("./assets/banana.png");
        this.coconutImage = loadImage("./assets/coconut1 evil.png");
        this.heartImage= loadImage("./assets/heart.png");
        for(let i=0; i<this.playerLives; i++) {
          this.hearts.push(new Heart(this.heartImage, i * 50 + 10, 10));
        }
      }
    setup() {
        createCanvas(600, 600);
      }
    draw() {
        this.background.update();
        this.background.draw();
        this.player.draw();
        this.hearts.forEach(heart => heart.draw());
        
        if(frameCount% 90===0) {
          this.obstacles.push(new Obstacle(this.obstacleImage))
        }

        this.obstacles.forEach(obstacle => {
          obstacle.draw()
        })
        this.obstacles= this.obstacles.filter(obstacle => {
          if(obstacle.collision(this.player) || obstacle.x < -obstacle.width){
            return false
          } else {
            return true
          }
        
        })
        if(frameCount% 90===0) {
          this.coconuts.push(new Coconut(this.coconutImage))
        }

        this.coconuts.forEach(coconut => {
          coconut.draw()
        })
        this.coconuts= this.coconuts.filter(coconut => {
          if(coconut.collision(this.player) || coconut.x < -coconut.width){
            return false
          } else {
            return true
          }
        
        })
      }
  
    }
  
  



  