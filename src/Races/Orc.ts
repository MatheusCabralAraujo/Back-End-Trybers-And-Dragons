import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static countOrcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countOrcs += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.countOrcs;
  } 
} 