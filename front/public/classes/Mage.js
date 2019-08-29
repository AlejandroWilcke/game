import Player from "./Player";

function Mage(){
    this.health = 700;
    this.maxHealth = this.health;
    this.mana = 600;
    this.maxMana = this.mana;
    this.damage = 200;
    this.healingPower = 250;
    this.healingCost = 60;
    this.criticalChance = 15; //%
    this.criticalDamage = 2;
}

Mage.prototype = new Player();

export default Mage;