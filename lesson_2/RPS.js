const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];

const POSSIBLE_SELECTION = {
  r: 'rock',
  p: 'paper',
  sc: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

const WIN_SELECTION = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};

let round = 1;
let playerPoints = 0;
let computerPoints = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function askForChoice() {
  console.log("            Choose your weapon typing one of the letters in brackets:\n");
  console.log("                [r]ock, [p]aper, [sc]issors, [l]izard, [sp]pock.");
  let choice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(choice)) {
    console.log("                           That's not a valid choice");
    choice = readline.question().toLowerCase();
  }
  return POSSIBLE_SELECTION[choice];
}

function getComputerChoice() {
  let randomIndex = Math.floor((Math.random() * VALID_CHOICES.length));
  let computerChoice = VALID_CHOICES[randomIndex];
  return POSSIBLE_SELECTION[computerChoice];
}

function getRoundWinner(choice, computerChoice) {
  console.log(`                    You chose ${choice}, computer choose ${computerChoice}`);

  if (WIN_SELECTION[choice].includes(computerChoice)) {
    console.log('                                  You won!');
    return 'player';

  } else if (WIN_SELECTION[computerChoice].includes(choice)) {
    console.log('                                Computer won!');
    return 'computer';

  } else {
    console.log("                                 It's a tie!");
    return 'both';
  }
}

function pointsCalc(roundWinner) {

  switch (roundWinner) {

    case 'player':
      playerPoints += 1;
      break;

    case 'computer':
      computerPoints += 1;
      break;

    case 'both':
      playerPoints += 1;
      computerPoints += 1;
      break;
  }

}
function displayRound() {
  console.log(`\n\n                               R O U N D   ${round}   O F   5\n`);
}

function displayPoints() {
  console.log('             --------------------------------------------------------');
  console.log(`             |   Player Points = ${playerPoints}      |     Computer Points = ${computerPoints}   |`);
  console.log('             --------------------------------------------------------\n');

}

function displayGameWinner() {
  console.log('             --------------------------------------------------------');
  if (playerPoints > computerPoints) {
    console.log(`                       Player wins with ${playerPoints} points over ${computerPoints}`);
  } else if (computerPoints > playerPoints) {
    console.log(`                      Computer wins with ${computerPoints} points over ${playerPoints}`);
  } else {
    console.log(`                               There's a tie to ${playerPoints} points`);
  }
  console.log('             --------------------------------------------------------\n');
}

function resetVariables() {
  playerPoints = 0;
  computerPoints = 0;
  round = 0;
}

function askForPlayingNextRound() {
  console.log(round);
  if (round > 0) {
    console.log('                 Are you brave enought to go to next round? (y/n)');
  } else {
    console.log('                      Do you want to play a new game? (y/n)');
  }

  let answer = readline.question().toLowerCase();
  while (!['y', 'n'].includes(answer)) {
    console.log('                            Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {

  console.clear();

  displayRound();

  displayPoints();

  let choice = askForChoice();

  let computerChoice = getComputerChoice();

  let roundWinner = getRoundWinner(choice, computerChoice);

  pointsCalc(roundWinner);

  displayPoints();

  if (round === 5 || (playerPoints === 3 && computerPoints < 3) ||
      (playerPoints < 3 && computerPoints === 3)) {
    displayGameWinner();
    resetVariables();
  }
  let answer = askForPlayingNextRound();

  round += 1;

  if (answer[0] === 'n') break;
}