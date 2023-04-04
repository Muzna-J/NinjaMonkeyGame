/*class Coconut {
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
    
        if (dist(coconutX, coconutY, playerX, playerY) > 25) {
            return false
        } else {
            
            const hearts = document.querySelectorAll(".heart");
            if (hearts.length > 0) {
                hearts[hearts.length - 1].remove();
                playerInfo.lives--;
            }

            return true;
        }
        
        }
    }*/


