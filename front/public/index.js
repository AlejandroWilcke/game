import Archer from './classes/Archer.js';
import Player from './classes/Player.js';
import Mage from './classes/Mage.js';

var mage = new Mage();
var archer = new Archer();

let button = document.createElement('button');
button.textContent = "Attack Archer";
button.onclick = function(){
    mage.attackPlayer(archer);
}
document.body.appendChild(button);

let button2 = document.createElement('button');
button2.textContent = "Heal Archer";
button2.onclick = function(){
    mage.healPlayer(archer);
}
document.body.appendChild(button2);

let button3 = document.createElement('button');
button3.textContent = "Status";
button3.onclick = function(){
    console.log(mage);
    console.log(archer);
}
document.body.appendChild(button3);

var gameArea = {
    canvas: document.createElement('canvas'),
    start(){
        this.addCanvas();
        this.addEventListeners();
        this.interval = setInterval(this.updateGameArea, 1000/60);
    },
    addCanvas(){
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
    },
    addEventListeners(){
        document.body.addEventListener('mousedown', this.mouseDown);
        document.body.addEventListener('mousemove', this.mouseMove);
        document.body.addEventListener('mouseup', this.mouseUp);
    },
    mouseDown(e){

    },
    mouseMove(e){

    },
    mouseUp(e){
 
    },
    updateGameArea(){
        gameArea.ctx.clearRect(0, 0, gameArea.canvas.width, gameArea.canvas.height);
    }
}

//gameArea.start();