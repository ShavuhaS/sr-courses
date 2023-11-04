class Warrior {
  #xp;
  #achievements;

  constructor() {
    this.#xp = 100;
    this.#achievements = [];
  }
  
  
  static get possibleRanks() { 
    return ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
  }

  experience() {
    return this.#xp;
  }
  level() {
    return Math.floor(this.#xp / 100);
  }
  rank() {
    return Warrior.possibleRanks[Math.floor(this.level() / 10)];
  }
  achievements() {
    return this.#achievements;
  }
  
  #addXp(xpGain) {
    this.#xp = Math.min(10000, this.#xp + xpGain);
  }
  
  
  battle(enemyLvl) {
    if(enemyLvl < 1 || enemyLvl > 100) return "Invalid level";
    const enemyRank = Warrior.possibleRanks[Math.floor(enemyLvl / 10)];
    const lvlDiff = enemyLvl - this.level();
    
    if(lvlDiff <= -2) {
      return "Easy fight";
    } else if(lvlDiff === -1) {
        this.#addXp(5);
        return "A good fight";
    } else if(enemyRank !== this.rank() && lvlDiff >= 5) {
        return "You've been defeated";
    } else {
        this.#addXp(Math.max(10, 20 * lvlDiff * lvlDiff));
        return lvlDiff === 0 ? "A good fight" : "An intense fight";
    }
  }
  
  training([achievement, xpGain, minLvl]) {
    if(this.level() < minLvl) return "Not strong enough";
    this.#addXp(xpGain);
    this.#achievements.push(achievement);
    return achievement;
  }
}

let lowmmrPrisoner = new Warrior();
const testCases = [
	["level"],
	["experience"],
	["rank"],
	["achievements"],
	["training", ["Defeated Chuck Norris", 9000, 1]],
	["experience"],
	["level"],
	["rank"],
	["battle", 90],
	["experience"],
	["achievements"],
];

Array.prototype.toString = function() {
	return '[ ' + this.join(', ') + ' ]';
}
testCases.forEach( (test) => {
  let [name, ...args] = test;
  let result = lowmmrPrisoner[name](...args);
  
  console.log(`lowmmrPrisoner.${name}(${args.join(', ')}) = ${result}`);
});