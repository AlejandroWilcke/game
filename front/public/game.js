var area = {
    canvas: document.createElement('canvas'),
    circles: [],
    start(){
        this.addCanvas();
        this.addEventListeners();
        this.generateCircles();
        this.interval = setInterval(area.updateGameArea, 1000/60);
    },
    addCanvas(){
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 50;
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    },
    addEventListeners(){
        window.addEventListener('resize', this.resizeCanvas);
        window.addEventListener('visibilitychange', this.pauseOrResume);
    },
    pauseOrResume(e){
        document.hidden ? clearInterval(area.interval) : area.interval = setInterval(area.updateGameArea, 1000/60);
    },
    generateCircles(){
        // new Circle(0, 200, 200, 20, 'right', 'none', 2, 2, 'black');
        // new Circle(1, 800, 200, 20, 'left', 'none', 2, 2, 'black');
        let quantity = 30;
        for( let i = 0; i < quantity; i++ ){
            let x = Math.round( Math.random() * area.canvas.width );
            let y = Math.round( Math.random() * area.canvas.height );
            let r = Math.round( Math.random() * 12 + 5);
            let directionsX = ['left', 'left', 'left', 'left', 'right', 'right', 'right', 'right'];
            let directionsY = ['up', 'up', 'up', 'up', 'down', 'down', 'down', 'down'];
            let dx = directionsX[Math.floor( Math.random() * directionsX.length )];
            let dy = directionsY[Math.floor( Math.random() * directionsY.length )];
            let speedX = Math.ceil( Math.random() * 3 );
            let speedY = Math.ceil( Math.random() * 3 );
            new Circle(i, x, y, r, dx, dy, speedX, speedY, 'red');
        }
    },
    resizeCanvas(e){
        area.canvas.width = window.innerWidth - 50;
        area.canvas.height = window.innerHeight - 50;
    },
    updateGameArea(){
        area.ctx.clearRect(0, 0, area.canvas.width, area.canvas.height);
        area.circles.forEach( circle => circle.update() );
    }
}

class Circle {
    constructor(i, x, y, r, dx, dy, speedX, speedY, color){
        this.i = i;
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        area.circles.push(this);
    }
}

Circle.prototype.update = function(){

    if( this.x - this.r <= 0 && this.dx === 'left' ) {
        this.dx = 'right';
    }

    if( this.x + this.r >= area.canvas.width && this.dx === 'right' ){
        this.dx = 'left';
    }

    if( this.y - this.r <= 0 && this.dy === 'up' ) {
        this.dy = 'down';
    }

    if( this.y + this.r >= area.canvas.height && this.dy === 'down' ){
        this.dy = 'up';
    }

    this.collisioned();

    switch(this.dx){
        case 'left': this.x -= this.speedX; break;
        case 'right': this.x += this.speedX; break;
    }

    switch(this.dy){
        case 'up': this.y -= this.speedY; break;
        case 'down': this.y += this.speedY; break;
    }

    area.ctx.beginPath();
    area.ctx.strokeStyle = this.color;
    area.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    area.ctx.stroke();
}

Circle.prototype.collisioned = function(){
    for( let i = 0; i < area.circles.length; i++ ){

        if ( this.i === i ) { continue }

        let circle = area.circles[i];

        if (
            this.x + this.r >= circle.x - circle.r &&
            this.x - this.r <= circle.x + circle.r &&
            this.y - this.r <= circle.y + circle.r &&
            this.y + this.r >= circle.y - circle.r
            ){
            this.dx === 'right' ? this.dx = 'left' : this.dx = 'right';
            this.dy === 'up'    ? this.dy = 'down' : this.dy = 'up';
            // circle.dx === 'right' ? circle.dx = 'left' : circle.dx = 'right';
            // circle.dy === 'up'    ? circle.dy = 'down' : circle.dy = 'up';
        }

    }
}

area.start();