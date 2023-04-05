if(!localStorage.getItem('highestScore')) {
  localStorage.setItem('highestScore', 0);
}

const game = new Game();

function preload() {
  game.preload();
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  game.draw();
  textSize(30);
  fill(255);
  text(`Highest score: ${localStorage.getItem('highestScore')}`, width - 300, 40);
}
function keyPressed() {
    if (keyCode === 38) {
      game.player.jump();
    }
  }

