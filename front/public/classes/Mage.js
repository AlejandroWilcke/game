import Player from "./Player";

class Mage extends Player {
    constructor(name){
        super();
        this.name = name;
        this.health = 700;
        this.maxHealth = this.health;
        this.damage = 200;
        this.criticalChance = 15; //%
        this.criticalDamage = 2;
        this.movementSpeed = 3.5;

        this.mana = 600;
        this.maxMana = this.mana;
        this.healingPower = 250;
        this.healingCost = 60;
    }
}

Mage.prototype.heal = function(player){
    if ( this.mana > this.healingCost && player.health < player.maxHealth ){
        player.health += this.healingPower;
        player.health > player.maxHealth ? player.health = player.maxHealth : null;
        this.mana -= this.healingCost;
        this.mana < 0 ? this.mana = 0 : null;
    }
}

export default Mage;