var area = {
    canvas: document.createElement('canvas'),
    circles: [],
    start(){
        this.addCanvas();
        this.addEventListeners();
        this.generateCircles();
        this.interval = setInterval(area.updateGameArea, 1000/40);
    },
    addCanvas(){
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 50;
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    },
    addEventListeners(){
        window.addEventListener('resize', this.resizeCanvas);
    },
    generateCircles(){
        let quantity = 30;
        for( let i = 0; i < quantity; i++ ){
            let x = Math.round( Math.random() * area.canvas.width );
            let y = Math.round( Math.random() * area.canvas.height );
            let r = Math.round( Math.random() * 12 + 5);
            let directionsX = ['left', 'left', 'left', 'left', 'right', 'right', 'right', 'right'];
            let directionsY = ['up', 'up', 'up', 'up', 'down', 'down', 'down', 'down'];
            let dx = directionsX[Math.floor( Math.random() * directionsX.length )];
            let dy = directionsY[Math.floor( Math.random() * directionsY.length )];
            let speed = Math.ceil( Math.random() * 3 );
            new Circle(x, y, r, dx, dy, speed, 'red');
        }
    },
    resizeCanvas(e){
        area.canvas.width = window.innerWidth - 50;
        area.canvas.height = window.innerHeight - 50;
    },
    updateGameArea(){
        area.ctx.clearRect(0, 0, area.canvas.width, area.canvas.height);
        area.circles.forEach( c => c.update() );
    }
}

class Circle {
    constructor(x, y, r, dx, dy, speed, color){
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.speed = speed;
        area.circles.push(this);
    }
}

Circle.prototype.update = function(){

    if( this.x <= 0 && this.dx === 'left' ) {
        this.dx = 'right';
    }

    if( this.x >= area.canvas.width && this.dx === 'right' ){
        this.dx = 'left';
    }

    if( this.y <= 0 && this.dy === 'up' ) {
        this.dy = 'down';
    }

    if( this.y >= area.canvas.height && this.dy === 'down' ){
        this.dy = 'up';
    }

    switch(this.dx){
        case 'left': this.x -= this.speed; break;
        case 'right': this.x += this.speed; break;
    }

    switch(this.dy){
        case 'up': this.y -= this.speed; break;
        case 'down': this.y += this.speed; break;
    }

    area.ctx.beginPath();
    area.ctx.strokeStyle = this.color;
    area.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    area.ctx.stroke();
}

area.start();