import { SimpleFighter } from './Fighter';

const monsterLifePoints = 85;
const monsterStrength = 63;

export default class Monster implements SimpleFighter {
  readonly strength = monsterStrength;

  constructor(protected _lifePoints = monsterLifePoints) {
    this.strength = monsterStrength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this.lifePoints <= 0) { this._lifePoints = -1; }
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}