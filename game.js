console.log('game.j start')
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the TicTacToe class from the previous example
console.log('game.j start')
import { TicTacToe, Cell } from "./tic-tac-toe";
var tic_tac_toe_1 = require("./tic-tac-toe");
// Get references to the HTML elements
var gameBoard = document.getElementById("game-board");
var cells = gameBoard.getElementsByTagName("td");
var game = new tic_tac_toe_1.TicTacToe();
var _loop_1 = function (i) {
    var row = Math.floor(i / 3);
    var col = i % 3;
    cells[i].addEventListener("click", function () {
        var result = game.play(row, col);
        if (result) {
            // The game is over
            alert(result === tic_tac_toe_1.Cell.X ? "X wins!" : "O wins!");
            resetGame();
        }
        else {
            // Update the cell with the current player's symbol
            cells[i].textContent = game.currentPlayer;
        }
    });
};
// Add a click event listener to each cell
for (var i = 0; i < cells.length; i++) {
    _loop_1(i);
}
function resetGame() {
    // Reset the game board and player
    game = new tic_tac_toe_1.TicTacToe();
    for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
}
