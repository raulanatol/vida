export class LifeGenerator {
  rows: number;
  columns: number;
  life: number[][];

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.life = [];
  }

  generateLife() {
    const lifeArray: number[][] = [];
    for (let row = 0; row < this.rows; row++) {
      const newRow = Array(this.columns);
      for (let column = 0; column < this.columns; column++) {
        newRow[column] = Math.floor(Math.random() * 2);
      }
      lifeArray.push(newRow);
    }
    this.life = lifeArray;
  }

  nextGeneration() {
    this.generateLife();
  }
}
