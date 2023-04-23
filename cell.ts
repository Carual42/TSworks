export enum Cell {
    Empty = "",
    X = "X",
    O = "O",
  }
  
  type Board = Cell[][];
  
  class TicTacToe {
    private board: Board;
    private currentPlayer: Cell;
  
    constructor() {
      this.board = [
        [Cell.Empty, Cell.Empty, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Empty],
        [Cell.Empty, Cell.Empty, Cell.Empty],
      ];
      this.currentPlayer = Cell.X;
    }
  
    play(row: number, col: number): Cell | null {
      if (this.board[row][col] !== Cell.Empty) {
        return null; // Cell already occupied
      }
      this.board[row][col] = this.currentPlayer;
      const winner = this.checkForWinner();
      if (winner) {
        return winner;
      }
      this.currentPlayer = this.currentPlayer === Cell.X ? Cell.O : Cell.X;
      return this.board[row][col];
    }
  
    private checkForWinner(): Cell | null {
      // Check rows
      for (let row = 0; row < 3; row++) {
        if (
          this.board[row][0] === this.board[row][1] &&
          this.board[row][1] === this.board[row][2] &&
          this.board[row][0] !== Cell.Empty
        ) {
          return this.board[row][0];
        }
      }
  
      // Check columns
      for (let col = 0; col < 3; col++) {
        if (
          this.board[0][col] === this.board[1][col] &&
          this.board[1][col] === this.board[2][col] &&
          this.board[0][col] !== Cell.Empty
        ) {
          return this.board[0][col];
        }
      }
  
      // Check diagonals
      if (
        this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2] &&
        this.board[0][0] !== Cell.Empty
      ) {
        return this.board[0][0];
      }
      if (
        this.board[0][2] === this.board[1][1] &&
        this.board[1][1] === this.board[2][0] &&
        this.board[0][2] !== Cell.Empty
      ) {
        return this.board[0][2];
      }
  
      // No winner yet
      return null;
    }
  
  }

  
  