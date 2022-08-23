import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(
    readonly player: Fighter,
    readonly environment: (SimpleFighter | Fighter)[],
  ) {
    super(player);
    this.player = player;
    this.environment = environment;
  }

  fight(): number {
    this.environment.forEach((enemy) => {
      while (this.player.lifePoints > 0 && enemy.lifePoints > 0) {
        this.player.attack(enemy);
        enemy.attack(this.player);
      }
    });
    return super.fight();
  }
} 
