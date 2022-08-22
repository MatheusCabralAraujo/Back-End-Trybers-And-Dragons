import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static countNecromancers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.countNecromancers += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.countNecromancers;
  }
} 