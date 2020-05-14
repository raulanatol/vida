import { World } from './ui/World';
import { LifeGenerator } from './model/LifeGenerator';

window.addEventListener('load', main);

const START_TIMER = false;

function main() {
  const game = new LifeGenerator(200, 200);
  game.generateLife();

  const world = new World('world', 200, 200);
  world.draw(game.life);

  if (START_TIMER) {
    setInterval(() => {
      game.nextGeneration();
      world.draw(game.life);
    }, 100);
  }
}
