import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static countDwarves = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countDwarves += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return this.countDwarves;
  } 
} 

export default Dwarf;