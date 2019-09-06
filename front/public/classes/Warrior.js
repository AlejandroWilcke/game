import Player from './Player';

class Warrior extends Player {
    constructor(name){
        super();
        this.name = name;
        this.health = 1300;
        this.maxHealth = this.health;
        this.damage = 150;
        this.criticalChance = 20; //%
        this.criticalDamage = 1.5;
        this.movementSpeed = 3;
        
        this.blockPower = 120;
        this.blockCooldown = 6;
    }
}

Warrior.prototype.block = function(){

}

export default Warrior;