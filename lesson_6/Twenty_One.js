const readline = require('readline-sync');

const SUIT_STRUCTURE = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const SUITS = ['Hearts', 'Diamonds', 'Cubes', 'Spades'];
const DEALED_CARDS = 2;
const POINTS_LIMIT = 21;
const NUMBER_OF_ROUNDS = 5;
const DEALERS_LIMIT = 17;

let dealersHand = [];
let playersHand = [];
let round = 1;
let dealerRoundPoints = 0;
let playerRoundPoints = 0;

function welcomeMsg() {
  console.clear();
  let welcome = `\n
  ------------------------------------
  |  WELCOME TO THE TWENTY ONE GAME  |
  ------------------------------------`;
  console.log(welcome);
  console.log('\n        Press enter to start...');
  readline.question();
}

function createDeck() {
  let deck = [];
  for (let count1 = 0; count1 < SUITS.length; count1 += 1) {
    for (let count2 = 0; count2 < SUIT_STRUCTURE.length; count2 += 1) {
      deck.push(SUIT_STRUCTURE[count2] + ' ' + 'of' + ' ' + SUITS[count1]);
    }
  }
  return deck;
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
}

function dealCards(deck) {
  for (let index = 0; index < DEALED_CARDS; index += 1) {
    playersHand.push(deck.shift());
  }
  for (let index = 0; index < DEALED_CARDS; index += 1) {
    dealersHand.push(deck.shift());
  }
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

function showRound() {
  console.clear();
  console.log(`\n                 ROUND ${round} OF ${NUMBER_OF_ROUNDS}`);
}

function showRoundPoints() {
  console.log(`\n             Player: ${playerRoundPoints} Dealer: ${dealerRoundPoints}`);
}

function showTableCards(dealersHand, playersHand) {
  let showText = `\n
     The dealer deals the cards
     -----------------------------------------
          Dealer has: ${dealersHand[0]} and unknown card    
          Player has: ${joinOr(playersHand, ' ,' , 'and')}  
     -----------------------------------------`;
  console.log(showText);
  console.log(`\n               Player has ${getPoints(playersHand)} points`);
}

function showFinalCards(dealersHand,playersHand,dealersPoints,playersPoints) {
  let showText = `\n    
     The dealer deals it's cards
     ----------------------------------------- 
          Dealer has: ${joinOr(dealersHand, ' ,', 'and')}
          Player has: ${joinOr(playersHand, ' ,' , 'and')}
     -----------------------------------------`;
  console.log(showText);
  console.log(`\n               Dealer has ${dealersPoints} points`);
  console.log(`               Player has ${playersPoints} points`);
}

function dealCard(deck, hand) {
  hand.push(deck.shift());
}

function askPlayer() {
  console.log('\n     Hit or Stay?. Press "s" to stay or "h" to hit');
  let answer = readline.question().toLowerCase();

  while (!['s', 'stay', 'h', 'hit'].includes(answer)) {
    console.log('     Press "s" to stay or "h" to hit');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function getPoints(hand) {
  let str1 = hand.map(str => str.split(' '));
  let points = 0;
  let numberOfAces = 0;
  str1.forEach(arr => {
    if (arr[0] === 'Ace') {
      numberOfAces += 1;
      points += 1;
    } else if (Number(arr[0]) <= 10 ) {
      points += Number(arr[0]);
    } else {
      points += 10;
    }
  });
  for (let index = 0; index < numberOfAces; index += 1) {
    if ( points + 10 <= POINTS_LIMIT) points += 10;
  }
  return points;
}

function isBusted(playersHand) {
  return getPoints(playersHand) > POINTS_LIMIT;
}

function dealersPlay(deck) {
  while (getPoints(dealersHand) <= DEALERS_LIMIT) {
    dealCard(deck, dealersHand);
  }
}

function askToPlayNextRound() {
  console.log('\n     Do you want to play next round? (y/n)');
  let answer = readline.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    console.log("     I did't understand, do you want to play next round? (y/n)");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function askToPlayNewGame() {
  console.log('\n     Do you want to play another game? (y/n)');
  let answer = readline.question().toLowerCase();

  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    console.log("     I did't understand, do you want to play another game? (y/n)");
    answer = readline.question().toLowerCase();
  }
  return answer;
}

function checkForWinner(dealerRoundPoints, playerRoundPoints) {
  if (dealerRoundPoints > playerRoundPoints) {
    console.log('\n            DEALERS WINS THIS ROUND!');
  } else if (dealerRoundPoints < playerRoundPoints) {
    console.log('\n            PLAYER WINS THIS ROUND!');
  } else {
    console.log('\n                THERE IS A TIE!');
  }
}

let deck = createDeck();
let playersPoints;
let dealersPoints;

welcomeMsg();

while (true) {
  while (true) {
    shuffle(deck);

    dealCards(deck);

    showRound();
    showRoundPoints();
    showTableCards(dealersHand, playersHand);

    while (true) {
      let answer = askPlayer();

      if (answer === 's' || answer === 'stay') break;

      if (answer === 'h' || answer === 'hit') {
        dealCard(deck, playersHand);

        showRound();
        showRoundPoints();
        showTableCards(dealersHand, playersHand);

        if (isBusted(playersHand)) {
        console.log('\n                 SORRY YOU LOST!');
        dealerRoundPoints += 1;
        break;
        }
      }
    }

    if (!isBusted(playersHand)) {

      dealersPlay(deck);
      playersPoints = getPoints(playersHand);
      dealersPoints = getPoints(dealersHand);

      showRound();
      showRoundPoints();
      showFinalCards(dealersHand, playersHand, dealersPoints, playersPoints);

      if (dealersPoints === playersPoints) {
        console.log("\n                   IT'S A TIE!");
      } else if ((dealersPoints > playersPoints) &&
                (dealersPoints <= POINTS_LIMIT)) {
        console.log('\n                   DEALER WINS!');
        dealerRoundPoints += 1;
      } else {
        console.log('\n                   PLAYER WINS!');
        playerRoundPoints += 1;
      }
    }

    if (round === 5) {
      checkForWinner(dealerRoundPoints, playerRoundPoints);
      break;
    }


    let answer = askToPlayNextRound();

    if (answer === 'n' || answer === 'no') break;
    else {
      dealersHand = [];
      playersHand = [];
      round += 1;
    }
  }

  let answer = askToPlayNewGame();

  if (answer === 'n' || answer === 'no') break;
  else {
    dealersHand = [];
    playersHand = [];
    round = 0;
    dealerRoundPoints = 0;
    playerRoundPoints = 0;
  }
}

console.log('              Thanks for playing!\n');

