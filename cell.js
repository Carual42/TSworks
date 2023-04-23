"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var Cell;
(function (Cell) {
    Cell["Empty"] = "";
    Cell["X"] = "X";
    Cell["O"] = "O";
})(Cell = exports.Cell || (exports.Cell = {}));
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.board = [
            [Cell.Empty, Cell.Empty, Cell.Empty],
            [Cell.Empty, Cell.Empty, Cell.Empty],
            [Cell.Empty, Cell.Empty, Cell.Empty],
        ];
        this.currentPlayer = Cell.X;
    }
    TicTacToe.prototype.play = function (row, col) {
        if (this.board[row][col] !== Cell.Empty) {
            return null; // Cell already occupied
        }
        this.board[row][col] = this.currentPlayer;
        var winner = this.checkForWinner();
        if (winner) {
            return winner;
        }
        this.currentPlayer = this.currentPlayer === Cell.X ? Cell.O : Cell.X;
        return this.board[row][col];
    };
    TicTacToe.prototype.checkForWinner = function () {
        // Check rows
        for (var row = 0; row < 3; row++) {
            if (this.board[row][0] === this.board[row][1] &&
                this.board[row][1] === this.board[row][2] &&
                this.board[row][0] !== Cell.Empty) {
                return this.board[row][0];
            }
        }
        // Check columns
        for (var col = 0; col < 3; col++) {
            if (this.board[0][col] === this.board[1][col] &&
                this.board[1][col] === this.board[2][col] &&
                this.board[0][col] !== Cell.Empty) {
                return this.board[0][col];
            }
        }
        // Check diagonals
        if (this.board[0][0] === this.board[1][1] &&
            this.board[1][1] === this.board[2][2] &&
            this.board[0][0] !== Cell.Empty) {
            return this.board[0][0];
        }
        if (this.board[0][2] === this.board[1][1] &&
            this.board[1][1] === this.board[2][0] &&
            this.board[0][2] !== Cell.Empty) {
            return this.board[0][2];
        }
        // No winner yet
        return null;
    };
    return TicTacToe;
}());
