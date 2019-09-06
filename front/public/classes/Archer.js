import Player from "./Player";

class Archer extends Player {
    constructor(name){
        super();
        this.name = name;
        this.health = 900;
        this.maxHealth = this.health;
        this.damage = 180;
        this.criticalChance = 35; //%
        this.criticalDamage = 1.25;
        this.movementSpeed = 5;
    }
}

export default Archer;