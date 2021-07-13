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

const WHO_GOES_FIRST = 'choose'; //Choose between 'player', 'computer', 'choose'

function whoPlaysFirst() {
  console.log('Who goes first? Computer or Player? Choose "C" for computer or "P" for player');
  let answer = readline.question().toLowerCase();
  while (true) {
    if (answer === 'c') {
      return 'computer';
      //break;
    } else if (answer === 'p') {
      return 'player';
      //break;
    } else {
      console.log('Please choose "C" for computer or "P" for player');
      answer = readline.question().toLowerCase();
    }
  }
}

function newBoard() {
  let board = [];
  for (let counter = 0; counter < 9; counter += 1) {
    board.push(INITIAL_MARKER);
  }
  return board;
}

function displayBoard(board, currentGame) {
  let boardLayout = `\n          
            GAME ${currentGame} of ${GAMES_TO_WIN}\n
      You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}\n

      -------------------------
      |       |       |       |
      |   ${board[0]}   |   ${board[1]}   |   ${board[2]}   |
      |       |       |       |
      |-------+-------+-------|
      |       |       |       |
      |   ${board[3]}   |   ${board[4]}   |   ${board[5]}   |
      |       |       |       |
      |-------+-------+-------|
      |       |       |       |
      |   ${board[6]}   |   ${board[7]}   |   ${board[8]}   |
      |       |       |       |
      -------------------------`;
  console.log(boardLayout);

  /*console.log(`\n          GAME ${currentGame} of ${GAMES_TO_WIN}\n`)
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
  console.log('    -------------------------'); */
}

function updateScore(board, score) {
  if (isAWinner(board) === 'Player') {
    score[0] += 1;
  } else if (isAWinner(board) === 'Computer') {
    score[1] += 1;
  }
  console.log(`\n Your score: ${score[0]}. Computer score: ${score[1]}`);
}

function computerAtackDefense(board, marker) {
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

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChooseSquare(board);
  } else {
    computerChooseSquare(board);
  }
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
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

  if (computerAtackDefense(board, COMPUTER_MARKER) !== null) {
    board[computerAtackDefense(board, COMPUTER_MARKER) - 1] = COMPUTER_MARKER;
  } else if (computerAtackDefense(board, HUMAN_MARKER) !== null) {
    board[computerAtackDefense(board, HUMAN_MARKER) - 1] = COMPUTER_MARKER;
  } else if (board[4] === INITIAL_MARKER) {
    board[4] = COMPUTER_MARKER;
  } else {
    let choose = Math.floor(Math.random() * (emptySquares(board).length));
    board[Number(emptySquares(board)[choose])] = COMPUTER_MARKER;
  }

}

function alternatePlayer(currentPlayer) {
  return (currentPlayer === 'player') ? 'computer' : 'player';
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


function matchWinner(score) {
  if (score[0] > score[1]) {
    console.log('   PLAYER WINS THE MATCH!');
  } else if (score[0] < score[1]) {
    console.log('   COMPUTER WINS THE MATCH');
  } else {
    console.log("IT'S A TIE!");
  }
}

function printWinner(board) {
  if (isAWinner(board)) {
    console.log('\n');
    console.log(`      ${isAWinner(board)} wins!`);
    console.log('\n\n');
  } else {
    console.log('\n');
    console.log(`              Its a tie!`);
    console.log('\n\n');
  }
}

function askToPlayNextRound() {
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
  return answer;
}

function askToPlayNextMatch() {
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
  return answer;
}

while (true) {

  let score = [0,0];
  let currentGame = 0;
  console.clear();

  let whoStartsThisRound;
  if (WHO_GOES_FIRST === 'choose') {
    whoStartsThisRound = whoPlaysFirst();
  } else {
    whoStartsThisRound = WHO_GOES_FIRST;
  }

  while (true) {
    console.clear();
    currentGame += 1;
    let board = newBoard();
    let currentPlayer = whoStartsThisRound;

    while (true) {
      console.clear();
      displayBoard(board, currentGame);

      updateScore(board, score);

      chooseSquare(board, currentPlayer);

      currentPlayer = alternatePlayer(currentPlayer);

      if (isBoardFull(board) || isAWinner(board)) break;
    }

    console.clear();
    displayBoard(board, currentGame);
    updateScore(board, score);

    printWinner(board);

    if (currentGame >= GAMES_TO_WIN) {
      matchWinner(score);
      break;
    }

    if (askToPlayNextRound() === 'n') break;
  }

  if (askToPlayNextMatch() === 'n') break;

}
console.log('Thank you for playing!');