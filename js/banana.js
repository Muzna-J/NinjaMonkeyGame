/*class Banana {
	constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 50
		this.height = 50
		this.velocity = 1
	}


	draw() {
		this.x -= this.velocity
		image(this.image, this.x, this.y, this.width, this.height)
	}

	collision(playerInfo) {
		let bananaX = this.x + this.width / 2
		let bananaY = this.y + this.height / 2
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
	
		if (dist(bananaX, bananaY, playerX, playerY) > 25) {
			return false
		} else {
			
			playerInfo.score += 100
			document.querySelector("#score span").innerText = playerInfo.score
			return true
		}
	}
}*/