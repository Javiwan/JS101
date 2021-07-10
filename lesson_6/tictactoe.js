const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const GAMES_TO_WIN = 5;

const WIN_COMBINATIONS = [
  [ 1, 2, 3], [ 4, 5, 6], [ 7, 8, 9],
  [ 1, 4, 7], [ 2, 5, 8], [ 3, 6, 9],
  [ 1, 5, 9], [ 7, 5, 3]
];


function displayBoard(board) {
  console.clear();

  console.log(`    You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n`);

  console.log('    -------------------------');
  console.log('    |       |       |       |');
  console.log(`    |   ${board[0]}   |   ${board[1]}   |   ${board[2]}   |`);
  console.log('    |       |       |       |');
  console.log('    |-------+-------+-------|');
  console.log('    |       |       |       |');
  console.log(`    |   ${board[3]}   |   ${board[4]}   |   ${board[5]}   |`);
  console.log('    |       |       |       |');
  console.log('    |-------+-------+-------|');
  console.log('    |       |       |       |');
  console.log(`    |   ${board[6]}   |   ${board[7]}   |   ${board[8]}   |`);
  console.log('    |       |       |       |');
  console.log('    -------------------------');
}

function newBoard() {
  let board = [];
  for (let counter = 0; counter < 9; counter += 1) {
    board.push(INITIAL_MARKER);
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, separator = ', ', str = 'or') {
  let result = '';

  if (arr.length < 2) return String(arr);

  if (arr.length === 2) {
    return String(arr[0]) + ' ' + str + ' ' + String(arr[1]);
  }

  for (let count = 0; count < arr.length; count += 1) {
    if (count < arr.length - 1) {
      result += String(arr[count]);
      result += separator;
    } else {
      result += str + ' ';
      result += String(arr[count]);
    }
  }
  return result;
}

function playerChooseSquare(board) {
  let answer;
  while (true) {
    console.log('\n');
    console.log(`Choose a square ${joinOr(emptySquares(board).slice().map(num => Number(num) + 1))}`);
    console.log('\n');
    answer = Number(readline.question());

    if (emptySquares(board).includes((answer - 1).toString())) break;

    console.log(`Sorry, that's not a valid option`);
  }

  board[answer - 1] = HUMAN_MARKER;
}

function computerChooseSquare(board) {
  console.log(emptySquares(board).length);
  let choose = Math.floor(Math.random() * (emptySquares(board).length));
  board[Number(emptySquares(board)[choose])] = COMPUTER_MARKER;
}

function isBoardFull(board) {
  return emptySquares(board).length === 0;
}

function isAWinner(board) {
  for (let count = 0; count < WIN_COMBINATIONS.length; count += 1) {
    let [sq1, sq2, sq3] = WIN_COMBINATIONS[count];

    if (
      board[sq1 - 1] === HUMAN_MARKER &&
      board[sq2 - 1] === HUMAN_MARKER &&
      board[sq3 - 1] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1 - 1] === COMPUTER_MARKER &&
      board[sq2 - 1] === COMPUTER_MARKER &&
      board[sq3 - 1] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function updateScore(board, score) {
  if (isAWinner(board) === 'Player') {
    score[0] += 1;
  } else if (isAWinner(board) === 'Computer') {
    score[1] += 1;
  }
  console.log(`\n Your score: ${score[0]}. Computer score: ${score[1]}`);
}
while (true) {

  let score = [0,0];

  while (true) {
    console.clear();

    let board = newBoard();


    while (true) {
      displayBoard(board, score);
      updateScore(board, score);

      playerChooseSquare(board);
      if (isBoardFull(board) || isAWinner(board)) break;

      computerChooseSquare(board);
      if (isBoardFull(board) || isAWinner(board)) break;

    }

    console.clear();
    displayBoard(board, score);
    updateScore(board, score);

    if (isAWinner(board)) {
      console.log('\n');
      console.log(`${isAWinner(board)} wins!`);
      console.log('\n\n');
    } else {
      console.log('\n');
      console.log(`Its a tie!`);
      console.log('\n\n');
    }
    console.log('Do you want to play again? (y or n)');
    let answer = readline.question().toLowerCase();
    if (answer !== 'y') break;
  }

  console.log('Thank you for playing!');

}