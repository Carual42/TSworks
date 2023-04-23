"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = exports.Cell = void 0;
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
        this._currentPlayer = Cell.X;
    }
    Object.defineProperty(TicTacToe.prototype, "currentPlayer", {
        get: function () {
            return this._currentPlayer;
        },
        enumerable: false,
        configurable: true
    });
    TicTacToe.prototype.play = function (row, col) {
        if (this.board[row][col] !== Cell.Empty) {
            // The cell is already occupied
            return undefined;
        }
        // Update the board with the current player's symbol
        this.board[row][col] = this.currentPlayer;
        // Check for a win or a tie
        if (this.checkWin(row, col)) {
            return this.currentPlayer;
        }
        else if (this.checkTie()) {
            return Cell.Empty;
        }
        // Switch to the other player
        this._currentPlayer = this.currentPlayer === Cell.X ? Cell.O : Cell.X;
        return undefined;
    };
    TicTacToe.prototype.checkWin = function (row, col) {
        // Check the row
        if (this.board[row][0] === this.currentPlayer &&
            this.board[row][1] === this.currentPlayer &&
            this.board[row][2] === this.currentPlayer) {
            return true;
        }
        // Check the column
        if (this.board[0][col] === this.currentPlayer &&
            this.board[1][col] === this.currentPlayer &&
            this.board[2][col] === this.currentPlayer) {
            return true;
        }
        // Check the diagonal
        if ((row === col &&
            this.board[0][0] === this.currentPlayer &&
            this.board[1][1] === this.currentPlayer &&
            this.board[2][2] === this.currentPlayer) ||
            (row + col === 2 &&
                this.board[0][2] === this.currentPlayer &&
                this.board[1][1] === this.currentPlayer &&
                this.board[2][0] === this.currentPlayer)) {
            return true;
        }
        return false;
    };
    TicTacToe.prototype.checkTie = function () {
        for (var row = 0; row < 3; row++) {
            for (var col = 0; col < 3; col++) {
                if (this.board[row][col] === Cell.Empty) {
                    // There is an empty cell, so the game is not tied
                    return false;
                }
            }
        }
        // All cells are occupied, so the game is tied
        return true;
    };
    return TicTacToe;
}());
exports.TicTacToe = TicTacToe;
