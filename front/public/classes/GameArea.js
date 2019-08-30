class GameArea {
    constructor(width, height){
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.interval = 0;
        this.framesPerSecond = 1000 / 60;
        this.components = [];
    }
}

GameArea.prototype.start = function(){
    document.body.appendChild(this.canvas);
    this.interval = setInterval(() => this.update(), this.framesPerSecond);
}

GameArea.prototype.stop = function(){
    clearInterval(this.interval);
}

GameArea.prototype.update = function(){
    this.clear();
    this.draw();
}

GameArea.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

GameArea.prototype.draw = function(){
    this.components.forEach( c => c.update() );
}

export default GameArea;