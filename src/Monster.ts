import { SimpleFighter } from "./Fighter";

const monsterLifePoints = 85;
const monsterStrength = 63;

class Monster implements SimpleFighter {
  private _lifepoints;
  readonly strength = monsterStrength;

  constructor(){
    this._lifepoints: monsterLifePoints;
    this.strength: monsterStrength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifepoints -= attackPoints;
    if (this._lifepoints <= 0) { this._lifepoints = -1; }
    return this._lifepoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength)
  }
}