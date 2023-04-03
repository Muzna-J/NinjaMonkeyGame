class Game {
    constructor() {
        this.background= new Background()
        this.player= new Player()
        this.backgroundImage= null
        this.playerImage= null
       // this.coconutImages= []
        this.obstacle= []
        this.obstacleImage=null
       // this.coconut= []
        

    }

    preload() {
        this.background.preload()
        this.backgroundImage= loadImage("./assets/background.png");
        this.playerImage= loadImage("./assets/ninja monkey right.png");
       // this.coconutImages.push(loadImage("./assets/coconut1 evil.png"));
        this.obstacleImage= loadImage("./assets/banana.png");
    }

    setup() {
        createCanvas(600, 600);
        
      }
    
      draw() {
        this.background.update()
		this.background.draw()
		this.player.draw()

       /* if (frameCount % 90 === 0) {
			this.banana.push(new Banana(this.bananaImage))
		}
        this.banana.forEach(function (banana) {
			banana.draw()
		})
        this.banana = this.banana.filter(banana => {
            if (banana.collision(this.player) || banana.x < 0 - banana.width) {
				this.banana.splice(this.banana.indexOf(banana), 1)
            }
		})*/

        if (frameCount % 90 === 0) {
			this.obstacle.push(new Obstacle(this.obstacleImage))
		}
        this.obstacle.forEach(function (obstacle) {
			obstacle.draw()
		})
        this.obstacle = this.obstacle.filter(obstacle => {
            if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
                return false
			} else {
				return true
				
            }
		})

       /* if (frameCount % 60 === 0) {
            this.coconut.push(new Coconut(random(this.coconutImages), width/2))
        }

        this.coconut.forEach(function (coconut) {
            coconut.draw();
        });
        this.coconut = this.coconut.filter(coconut => {
            if (coconut.collision(this.player) || coconut.y > height + coconut.height) {
                return false;
            } else {
                return true;
            }
        });*/

    }

}
