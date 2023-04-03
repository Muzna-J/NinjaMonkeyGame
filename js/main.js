const game= new Game()

function preload() {
    game.preload()
};

function setup() {
    createCanvas(600,600)
    
};

function draw() {
    game.draw()
}

function keyPressed() {
    if(keyCode=== 38) {
        game.player.jump()
    }
}