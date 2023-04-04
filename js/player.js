class Player {
    constructor() {
        this.width= 100;
        this.height= 140;
        this.x= 0;
        this.y= 600 - this.height;
        this.gravity= 0.2;
        this.velocity= 0;
        this.score= 0;

    }

    draw() {
        this.velocity += this.gravity
    this.y += this.velocity

    if (this.y >= height - this.height) {
        this.y = height - this.height
    } else if (this.y <= 0) {
        this.y = 0
    }

    image(game.playerImage, this.x, this.y, this.width, this.height)
        
    }
    
    jump() {
        if (this.y >= 0) {
            this.velocity = -10;
        } else {
            this.y = 0;
        }
    
    }
}

