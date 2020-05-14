const SQUARE_SIZE = 5;

export class World {
  context: CanvasRenderingContext2D;
  rows: number;
  columns: number;

  constructor(elementId: string, rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;

    const canvas: HTMLCanvasElement = document.getElementById(elementId) as HTMLCanvasElement;

    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!context) {
      throw new Error('Canvas not found');
    }

    this.context = context;
  }

  private drawPosition(row: number, column: number, color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(
      column * SQUARE_SIZE + 1,
      row * SQUARE_SIZE + 1,
      SQUARE_SIZE - 2,
      SQUARE_SIZE - 2
    );
  }

  draw(board: number[][]) {
    this.context.fillStyle = '#FFFFFF';
    this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        const value = board[row][column];
        const color = value === 0 ? '#FFFFFF' : '#00AA00';
        this.drawPosition(row, column, color);
      }
    }
  }
}
