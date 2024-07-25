# Tic Tac Toe Game

## Overview

This is a simple implementation of the classic Tic Tac Toe game using JavaScript, HTML, and CSS. The game offers two modes: Player vs. Player (PVP) and Player vs. Computer (PVC). Players take turns to place their marks (X or O) on the grid, aiming to be the first to get three of their marks in a row, column, or diagonal.

## Features

### Two Game Modes

- **Player vs. Player (PVP)**: Two players can play against each other.
- **Player vs. Computer (PVC)**: A single player can play against a simple computer AI.

### Dynamic UI

- The game highlights the winning combination when a player wins.
- Displays messages for winning and draw conditions.
- Allows players to restart the game without refreshing the page.

## How to Play

1. **Choose Game Mode**: Select either "PVP" or "PVC" mode by clicking the respective buttons.
2. **Make a Move**:
   - In PVP mode, players take turns clicking on the boxes to place their marks.
   - In PVC mode, the player makes the first move as "X", and the computer will automatically make its move as "O" after the player.
3. **Winning and Drawing**:
   - The game will check for a winning combination after each move.
   - If a player wins, the winning combination is highlighted, and a message is displayed.
   - If all boxes are filled without a winner, the game declares a draw.
4. **Play Again**: Click the "Play Again" button to restart the game.

## How to Run

1. Clone the repository.
2. Open the `index.html` file in your browser to start playing the game.
