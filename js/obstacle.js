

	class Obstacle {
		constructor(image) {
			this.image = image
			this.x = width
			this.y = random(600) 
			this.width = 50
			this.height = 50
			this.velocity = 1
		}
	
		draw() {
			this.x -= this.velocity
			image(this.image, this.x, this.y, this.width, this.height)
		}
	
		collision(playerInfo) {
			let obstacleX = this.x + this.width / 2
			let obstacleY = this.y + this.height / 2
			let playerX = playerInfo.x + playerInfo.width / 2
			let playerY = playerInfo.y + playerInfo.height / 2
		
			if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
				return false
			} else {
				
				playerInfo.score += 100
				document.querySelector("#score span").innerText = playerInfo.score;
				if(playerInfo.score===game.maxScore) {
					// game over
					const winningSound= new Audio('./audio/success-fanfare-trumpets-6185.mp3');
					winningSound.play();
					setTimeout(function(){
						noLoop();
						window.location.replace("./won.html");					
						const highestScore= JSON.parse(localStorage.getItem('highestScore')) || 0;
						
						if(playerInfo.score>highestScore) {
							localStorage.setItem('highestScore', JSON.stringify(playerInfo.score));
						}
					}, 800);
				}
				
				return true

			}
		}
	}
	
	
	
	
	
	
	
	