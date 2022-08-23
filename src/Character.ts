import { Fighter } from './Fighter/Fighter';
import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import Energy from './Energy';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _energy: Energy;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;

  constructor(name: string) {
    this._dexterity = Math.floor(Math.random() * 10) + 1;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = Math.floor(Math.random() * 10) + 1;
    this._defense = Math.floor(Math.random() * 10) + 1;
    this._energy = {
      type_: this._archetype.energyType, 
      amount: Math.floor(Math.random() * 10) + 1,
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  receiveDamage(attackPoints: number): number {
    const defensePoints = attackPoints - this._defense;
    if (defensePoints > 0) this._lifePoints -= defensePoints;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += Math.floor(Math.random() * 10) + 1;
    this._strength += Math.floor(Math.random() * 10) + 1;
    this._dexterity += Math.floor(Math.random() * 10) + 1;
    this._defense += Math.floor(Math.random() * 10) + 1;
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}