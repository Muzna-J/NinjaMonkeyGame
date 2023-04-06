const lifeLossSound= new Audio('../audio/error-2-126514.mp3');

class Coconut {
    constructor(image) {
        this.image = image
        this.x = width
        this.y = random(600) 
        this.width = 50
        this.height = 50
        this.velocity = 3
        
    }

    draw() {
        this.x -= this.velocity
        image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(playerInfo) {
        let coconutX = this.x + this.width / 2
        let coconutY = this.y + this.height / 2
        let playerX = playerInfo.x + playerInfo.width / 2
        let playerY = playerInfo.y + playerInfo.height / 2
    
        if (dist(coconutX, coconutY, playerX, playerY) > 50) {
            return false
        } else {
            
        
            playerInfo.lives--;
            game.playerLives--;
            game.hearts.pop();
            lifeLossSound.play();
            

            if(game.hearts.length===0) {
                // game over
                noLoop();
                window.location.replace("./over.html");
                
                
                

                const highestScore= JSON.parse(localStorage.getItem('highestScore')) || 0;
                
                if(playerInfo.score>highestScore) {
                    localStorage.setItem('highestScore', JSON.stringify(playerInfo.score));
                }
            }
            return true;
        }
        
        }
    }


