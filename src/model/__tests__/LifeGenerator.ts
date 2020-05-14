import { LifeGenerator } from '../LifeGenerator';

describe('LifeGenerator', () => {
  test('should generar un array de vida válido', () => {
    const generator = new LifeGenerator(200, 200);

    generator.generateLife();

    expect(generator.life).toHaveLength(200);
  });
});
