 enum Cell {
    Empty = "",
    X = "X",
    O = "O",
  }
  
 class TicTacToe {
    private board: Cell[][] = [
      [Cell.Empty, Cell.Empty, Cell.Empty],
      [Cell.Empty, Cell.Empty, Cell.Empty],
      [Cell.Empty, Cell.Empty, Cell.Empty],
    ];
    private _currentPlayer: Cell = Cell.X;
  
    public get currentPlayer(): Cell {
      return this._currentPlayer;
    }
  
    public play(row: number, col: number): Cell | undefined {
      if (this.board[row][col] !== Cell.Empty) {
        // The cell is already occupied
        return undefined;
      }
  
      // Update the board with the current player's symbol
      this.board[row][col] = this.currentPlayer;
  
      // Check for a win or a tie
      if (this.checkWin(row, col)) {
        return this.currentPlayer;
      } else if (this.checkTie()) {
        return Cell.Empty;
      }
  
      // Switch to the other player
      this._currentPlayer = this.currentPlayer === Cell.X ? Cell.O : Cell.X;
  
      return undefined;
    }
  
    private checkWin(row: number, col: number): boolean {
      // Check the row
      if (
        this.board[row][0] === this.currentPlayer &&
        this.board[row][1] === this.currentPlayer &&
        this.board[row][2] === this.currentPlayer
      ) {
        return true;
      }
  
      // Check the column
      if (
        this.board[0][col] === this.currentPlayer &&
        this.board[1][col] === this.currentPlayer &&
        this.board[2][col] === this.currentPlayer
      ) {
        return true;
      }
  
      // Check the diagonal
      if (
        (row === col &&
          this.board[0][0] === this.currentPlayer &&
          this.board[1][1] === this.currentPlayer &&
          this.board[2][2] === this.currentPlayer) ||
        (row + col === 2 &&
          this.board[0][2] === this.currentPlayer &&
          this.board[1][1] === this.currentPlayer &&
          this.board[2][0] === this.currentPlayer)
      ) {
        return true;
      }
  
      return false;
    }
  
    private checkTie(): boolean {
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (this.board[row][col] === Cell.Empty) {
            // There is an empty cell, so the game is not tied
            return false;
          }
        }
      }
      // All cells are occupied, so the game is tied
      return true;
    }
  }

  // Get references to the HTML elements
const gameBoard = document.getElementById("game-board");
const cells = gameBoard.getElementsByTagName("td");let game = new TicTacToe();

// Add a click event listener to each cell
for (let i = 0; i < cells.length; i++) {
  const row = Math.floor(i / 3);
  const col = i % 3;
  cells[i].addEventListener("click", () => {
    const result = game.play(row, col);
    if (result) {
      // The game is over
      alert(result === Cell.X ? "X wins!" : "O wins!");
      resetGame();
    } else {
      // Update the cell with the current player's symbol
      cells[i].textContent = game.currentPlayer;
    }
  });
}

function resetGame() {
  // Reset the game board and player
  game = new TicTacToe();
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}