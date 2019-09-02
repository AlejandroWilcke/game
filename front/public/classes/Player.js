class Player {
    constructor(){};
}

//ACTION FUNCTIONS
Player.prototype.attack = function(player){
    if ( player.health > 0 ) {
        this.isCriticalHit() ? (player.health -= this.damage * this.criticalDamage) : (player.health -= this.damage);
        player.health < 0 ? player.health = 0 : null;
    }
}

Player.prototype.heal = function(player){
    if ( this.mana > this.healingCost && player.health < player.maxHealth ){
        player.health += this.healingPower;
        player.health > player.maxHealth ? player.health = player.maxHealth : null;
        this.mana -= this.healingCost;
        this.mana < 0 ? this.mana = 0 : null;
    }
}

//CALCULATION FUNCTIONS
Player.prototype.isCriticalHit = function(){
    let result = Math.round(Math.random() * 100);
    return result <= this.criticalChance ? true : false;
}

export default Player;