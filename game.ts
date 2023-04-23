// Import the TicTacToe class from the previous example
import { TicTacToe, Cell } from "./tic-tac-toe";

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