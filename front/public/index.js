import GameArea from './classes/GameArea.js';
import Archer from './classes/Archer.js';
import Mage from './classes/Mage.js';
import Warrior from './classes/Warrior.js';

var mage = new Mage('Guada');
var archer = new Archer('Ale');
var warrior = new Warrior('Jona');

var gameArea = new GameArea(100, 50);



// var methods = [];

// for(let key in gameArea){
//     typeof(gameArea[key]) === 'function' ? methods.push({ [key] : gameArea[key] }) : null;
// }

// methods.forEach(function(method){
//     let key = Object.keys(method);
//     let button = document.createElement('button');
//     button.textContent = key
//     button.onclick = function(){ gameArea[key]() }
//     document.body.appendChild(button);
// });