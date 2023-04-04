class Game {
    constructor() {
      this.background = new Background();
      this.player = new Player();
      this.backgroundImage = null;
      this.playerImage = null;
      this.obstacleImage = null;
      this.obstacles = [];
    }
    preload() {
        this.background.preload();
        this.backgroundImage = loadImage("./assets/background.png");
        this.playerImage = loadImage("./assets/ninja monkey right.png");
        this.obstacleImage = loadImage("./assets/banana.png");
      }
    setup() {
        createCanvas(600, 600);
      }
    draw() {
        this.background.update();
        this.background.draw();
        this.player.draw();
        
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
        
      }

     
    }



    
