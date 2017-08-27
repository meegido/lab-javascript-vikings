// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}

Soldier.prototype.attack = function(){
  return this.strength;
}

Soldier.prototype.receiveDamage = function(damage) {
  this.health -= 50;
}

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
  this.name = name;
  this.battleCry = function() {
    return "Odin Owns You All!";
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.attack = function(){
  return this.strength;
}

Viking.prototype.receiveDamage = function(damage) {
  console.log(this.health);
  this.health -= damage;

  if(this.health > 0) {
    return this.name + " has received " + damage + " points of damage";
  } else {
    return this.name + " has died in act of combat"
  }

}

// Saxon
function Saxon (health, strength) {
  Soldier.call(this, health, strength)
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.attack = function() {
  return this.strength;
}

Saxon.prototype.receiveDamage = function(damage) {
    this.health -= damage;

    if(this.health > 0) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat"
    }
}

// War
function War () {}
