/*class Coconut{
    constructor(image) {
        this.image = image
		this.x =  Math.random() * (width - this.width)
		this.y = -this.height
		this.width = 50
		this.height = 50
		this.velocity = 5
    }

    draw() {
        this.y += this.velocity
		image(this.image, this.x, this.y, this.width, this.height)
    }

    collision(playerInfo) {
		let coconutX = this.x + this.width / 2
		let coconutY = this.y + this.height / 2
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
	
		if (dist(coconutX, coconutY, playerX, playerY) < 25) {
			return true
		} 
        else{
            return flase
        }
	}
}*/