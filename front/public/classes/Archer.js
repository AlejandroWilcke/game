import Player from "./Player";

class Archer extends Player {
    constructor(name){
        super();
        this.name = name;
        this.health = 900;
        this.maxHealth = this.health;
        this.mana = 0;
        this.maxMana = this.mana;
        this.damage = 180;
        this.healingPower = 0;
        this.healingCost = 0;
        this.criticalChance = 35; //%
        this.criticalDamage = 1.25;
    }
}

export default Archer;