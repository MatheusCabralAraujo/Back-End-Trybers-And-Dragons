import Race from './race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static countElves = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countElves += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.countElves;
  } 
} 