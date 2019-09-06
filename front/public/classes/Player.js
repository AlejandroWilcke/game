class Player {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.width = 70;
        this.height = 70;
    };
}

//ACTION FUNCTIONS
Player.prototype.attack = function(player){
    if ( player.health > 0 ) {
        this.isCriticalHit() ? (player.health -= this.damage * this.criticalDamage) : (player.health -= this.damage);
        player.health < 0 ? player.health = 0 : null;
        console.log(this.name + " attacked " + player.name + " and now has " + player.health + " health" )
    }
}

Player.prototype.walk = function(direction){
    direction === 'LEFT' ? this.x -= this.movementSpeed : this.x += this.movementSpeed;
}

Player.prototype.jump = function(){
    
}

//CALCULATION FUNCTIONS
Player.prototype.isCriticalHit = function(){
    let result = Math.round(Math.random() * 100);
    return result <= this.criticalChance ? true : false;
}

export default Player;