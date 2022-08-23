import { SimpleFighter } from "./Fighter";

class Monster implements SimpleFighter {
  protected _lifepoints: number;
  protected _strength: number;

  constructor(){
    this._lifepoints: 85;
    this._strength: 63;
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifepoints -= attackPoints;
    if (damage === 0) {
      this._lifepoints === -1;
    }
    return this._lifepoints
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength)
  }
}