//getting the html element startGame button
const startButton = document.getElementById("startGame");
//getting the html element resetGame button
const resetButton = document.getElementById("resetGame");
const outcome = document.getElementById("outcome");
const cells = document.querySelectorAll(".box");

startButton.addEventListener("click", () => {
  cells.forEach((cell) =>
    cell.addEventListener("click", alternateTokens.bind(this, cell))
  );
});

resetButton.addEventListener("click", resetBoard);


//we need to know all the winning options by cell id
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];


let filledBoard = false;

//this shows the first turn, and counts turns so we can change the emoji every turn
let turn = 0;

// shows the following emojis on the corresponding turn. If the turn is odd, then it will display the first token (Wine) and if it is an even turn, then it will display the second token (chocolate)
const tokenTurns = (turn) => {
  if (turn % 2 === 0) {
    return (token = "🍷");
  }
  else {
    return (token = "🍫");
  }
};

// this adds the token to the html in the cell and checks to make sure the board is not full. It also checks if there is a winner, by going through the winning combinations.
function alternateTokens(cell) {
  if (cell.innerText === "" && filledBoard === false) {
    cell.textContent = tokenTurns(turn);
    checkForWinner();
    return turn++;
  }
}


//we need to run a function that will check for the winner. We run a loop for the function starting with index 0 and ends at index 8, because it is the length of the array -1 (8). You add one every time and run the function. If the loop runs, and the 0 index for winning combination has the same inner text (token) as the 1st and 2nd index, and it is not empty, then we can say that the innerText (token) on the winning combination for that index won.

// After you have the first 3 selections, then we can check.
// returns empty string if there is no winner and returns "x" or "o" if there is a winner
function checkForWinner() {

  for (let i = 0; i < cells.length - 1; i++) {
    if (
      cells[winningCombinations[i][0]].innerText ===
        cells[winningCombinations[i][1]].innerText &&
     cells[winningCombinations[i][0]].innerText ===
       cells[winningCombinations[i][2]].innerText &&
      cells[winningCombinations[i][0]].innerText !== ""
    ) {
      outcome.innerText = `${
        cells[winningCombinations[i][0]].innerText
      } WINS!!!`;
      filledBoard = true;
      return;
    }
  }

  //once we fill all the spaces, indices (8), and there is no winner above, then the draw outcome displays.
  if (turn === 8) {
    filledBoard = true;
    outcome.innerText = "DRAW, would you like to play again?";
  }
}

//once there is a winner, or if the player wants to reset the board at anytime and play a new game, then wew can run this function to reset board.
function resetBoard() {
  cells.forEach((box) => {
    outcome.innerText = "";
    box.innerText = "";
    filledBoard = false;
    turn = 0;
  });
}
