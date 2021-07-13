const readline = require('readline-sync');

let whoGoesFirst = 'player'; //Choose between 'player', 'computer', 'choose'

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const GAMES_TO_WIN = 5;

const WIN_COMBINATIONS = [
  [ 1, 2, 3], [ 4, 5, 6], [ 7, 8, 9],
  [ 1, 4, 7], [ 2, 5, 8], [ 3, 6, 9],
  [ 1, 5, 9], [ 7, 5, 3]
];

function computerDefense(board, marker) {
  for ( let count = 0; count < WIN_COMBINATIONS.length; count += 1) {
    let dangerousArr = WIN_COMBINATIONS[count]
      .filter(num => board[num - 1] === marker);

    if (dangerousArr.length === 2) {
      let option = WIN_COMBINATIONS[count]
        .find(num => board[num - 1] === INITIAL_MARKER);

      if (option !== undefined) return option;
    }
  }
  return null;
}

function displayBoard(board, currentGame) {

  console.log(`\n          GAME ${currentGame} of ${GAMES_TO_WIN}\n`)
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

  if (computerDefense(board, COMPUTER_MARKER) !== null) {
    board[computerDefense(board, COMPUTER_MARKER) - 1] = COMPUTER_MARKER;
  } else if (computerDefense(board, HUMAN_MARKER) !== null) {
    board[computerDefense(board, HUMAN_MARKER) - 1] = COMPUTER_MARKER;
  } else if (board[4] === INITIAL_MARKER) {
    board[4] = COMPUTER_MARKER;
  } else {
    let choose = Math.floor(Math.random() * (emptySquares(board).length));
    board[Number(emptySquares(board)[choose])] = COMPUTER_MARKER;
  }

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

function matchWinner(score) {
  if (score[0] > score[1]) {
    console.log('   PLAYER WINS THE MATCH!');
  } else if (score[0] < score[1]) {
    console.log('   COMPUTER WINS THE MATCH');
  } else {
    console.log("IT'S A TIE!");
  }
}

function playerFirstSequence(board, currentGame, score) {
  while (true) {
    console.clear();
    displayBoard(board, currentGame);
    updateScore(board, score);

    playerChooseSquare(board);
    if (isBoardFull(board) || isAWinner(board)) break;

    computerChooseSquare(board);
    if (isBoardFull(board) || isAWinner(board)) break;

  }
}

function computerFirstSequence(board, currentGame, score) {
  while (true) {
    console.clear();

    computerChooseSquare(board);
    if (isBoardFull(board) || isAWinner(board)) break;

    displayBoard(board, currentGame);
    updateScore(board, score);

    playerChooseSquare(board);
    if (isBoardFull(board) || isAWinner(board)) break;

  }
}

function whoPlaysFirst() {
  console.log('Who goes first? Computer or Player? Choose "C" for computer or "P" for player');
  let answer = readline.question().toLowerCase();
  while (true) {
    if (answer === 'c') {
      whoGoesFirst = 'computer';
      break;
    } else if (answer === 'p') {
      whoGoesFirst = 'player';
      break;
    } else {
      console.log('Please choose "C" for computer or "P" for player');
      whoGoesFirst = readline.question().toLowerCase();
    }
  }
}

while (true) {

  let score = [0,0];
  let currentGame = 0;
  console.clear();
  whoPlaysFirst();

  while (true) {
    console.clear();
    currentGame += 1;
    let board = newBoard();

    switch (whoGoesFirst) {

      case 'player':
        playerFirstSequence(board, currentGame, score);
        break;

      case 'computer':
        computerFirstSequence(board, currentGame, score);
        break;
    }

    console.clear();
    displayBoard(board, currentGame);
    updateScore(board, score);

    if (isAWinner(board)) {
      console.log('\n');
      console.log(`      ${isAWinner(board)} wins!`);
      console.log('\n\n');
    } else {
      console.log('\n');
      console.log(`              Its a tie!`);
      console.log('\n\n');
    }

    if (currentGame >= GAMES_TO_WIN) {
      matchWinner(score);
      break;
    }

    console.log('Do you want to play next round? (y or n)');
    let answer = readline.question().toLowerCase();
    while (true) {
      if (answer === 'n' || answer === 'y') {
        break;
      } else {
        console.log("I didn't understand. Do you want to play next round? (y or n)");
        answer = readline.question().toLowerCase();
      }
    }
    if (answer === 'n') break;
  }

  console.log('\nDo you want to play a new match? (y or n)');
  let answer = readline.question().toLowerCase();
  while (true) {
    if (answer === 'n' || answer === 'y') {
      break;
    } else {
      console.log("I didn't understand. Do you want to play next round? (y or n)");
      answer = readline.question().toLowerCase();
    }
  }
  if (answer === 'n') break;
}
console.log('Thank you for playing!');