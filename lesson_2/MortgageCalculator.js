/*
inputs:  * The loan amount
         * The annual percentage rate (APR)
         * The loan duration
outputs: * Monthly interest rate
         * Loan duration in months
         * Monthly payment

This is the formula to use --->  m = p * (j / (1 - Math.pow((1 + j), (-n))))
m = montly payment
p = loan amount
j = monthly interest rate ---> is the annual percentage rate / 12
n = loan duration in month


Examples

Loan amount of $5000  at a 6% rate for 5 years =
$96.66 every month / total paid $5799.84 / total interest $799.84

Loan amount of $10000 at 3.45% rate for 8 years and 3 month =
$116.21 every month / total paid $11504.82/ total interest $1504.82

Loan amount of $3500 at 0% rate for 2 years and 4 month =
$125.00 every month / total paid $3500.00 / total interest $0.00

Loan amount of $23540.45 at 5.42% rate for 5 years and 7 month =
$407.98 every month / total paid $27334.41 / total interest $3793.96


Algorithm

-Ask for the loan amount in dollars
-Ask for the annual percentage rate in % ---> five per cent = 5
-Ask for the loan duration in years and months ---> yy/mm
-Calculate Monthly interest rate = annual percentage rate / 12
-Calculate loan duration in month
-Calculate montly paiments ---> m = p * (j / (1 - Math.pow((1 + j), (-n))))
-Calculate total paid ---> montly paiments * loan duration in month
-Calculate total interest paid ---> total paid - loan amount

*/

const readline = require('readline-sync');

function prompt (string) {
  console.log(`---> ${string}`);
}

function invalidInput(num) {
  return Number.isNaN(num) === true ||
    num < 0 ||
    num === '';
}

function invalidLoanDuration(input) {
  if (input.includes('/')) {
    let arr = input.split('/');
    console.log(arr[0], arr[1]);
    return ((isNaN(arr[0]) || isNaN(arr[1])) ||
      (((Number(arr[0]) < 0 || Number(arr[1]) < 0) ) ||
      ((Number(arr[0]) === 0) && (Number(arr[1]) === 0))) ||
      (arr[0] === '' || arr[1] === ''));
  }
  return true;
}

function calcMonthlyInterestRate(num) {
  return (num / 100) / 12;
}

function MonthlyPaiments(loan, monthlyInterest, loanDuration) {
  return loan * (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-loanDuration))));
}

function loanDurationInMonths(loanDuration) {
  let loanDurationArray = loanDuration.split('/');

  return (parseInt(loanDurationArray[0], 10) * 12) +
    parseInt(loanDurationArray[1], 10);
}

function askForLoanAmount() {
  prompt('Please introduce the loan amount:');
  let loanAmount = parseFloat(readline.question());

  while (invalidInput(loanAmount)) {
    prompt('Please introduce a valid loan amount. The loan amount must be a number greater than zero');
    loanAmount = parseFloat(readline.question());
  }
  return loanAmount;
}

function askForAnualPercentageRate() {
  prompt('Please introduce the Anual Percentage Rate: Example for "5.5%" introduce "5.5"');
  let anualPercentageRate = parseFloat(readline.question());

  while (invalidInput(anualPercentageRate)) {
    prompt('Please introduce a valid Anual Percentage Rate. Example: For "5.5%" introduce "5.5"');
    anualPercentageRate = parseFloat(readline.question());
  }
  return anualPercentageRate;
}

function askForLoanDuration() {
  prompt('Please introduce the loan duration in years/months. Example for 2 years and 11 months introduce "2/11"');
  let loanDuration = readline.question();

  while (invalidLoanDuration(loanDuration)) {
    prompt('Please introduce a valid loan duration in years/months. Example for 2 years and 11 months introduce "2/11"');
    loanDuration = readline.question();
  }

  return loanDuration;
}

function noPercentageRateLoanCalc(loanDuration, loanAmount) {
  let totalInterest = 0;

  let loanDurationMonths = loanDurationInMonths(loanDuration);

  let monthlyPaiment = loanAmount / loanDurationMonths;

  printResults(monthlyPaiment, loanAmount, totalInterest);
}

function loanCalc(loanDuration, anualPercentageRate, loanAmount) {
  let loanDurationMonths = loanDurationInMonths(loanDuration);

  let monthlyPercentageRate = calcMonthlyInterestRate(anualPercentageRate);

  let monthlyPaiment = MonthlyPaiments (
    loanAmount, monthlyPercentageRate, loanDurationMonths);

  let totalPaid = monthlyPaiment * loanDurationMonths;

  let totalInterest = totalPaid - loanAmount;

  printResults(monthlyPaiment, totalPaid, totalInterest);
}

function printResults(monthlyPaiment, loanAmount, totalInterest) {
  prompt(`You will have to pay $${monthlyPaiment.toFixed(2)} every month.`);
  prompt(`The total amount paid will be $${loanAmount.toFixed(2)}.`);
  prompt(`The total interest amount will be $${totalInterest.toFixed(2)}.`);
}

function askForNewCalculation() {
  prompt('Would you like to perform another loan calculation? (y/n)');
  let answer = readline.question().toLowerCase();

  while (!['y', 'n'].includes(answer)) {
    prompt('Please answer "y" for yes or "n" for no');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {

  console.clear();
  console.log('-----------------------------------------------------');
  console.log('|      Welcome to the Mortgage Calculator           |');
  console.log('-----------------------------------------------------');
  console.log('\n');

  let loanAmount = askForLoanAmount();
  let anualPercentageRate = askForAnualPercentageRate();
  let loanDuration = askForLoanDuration();


  if (anualPercentageRate === 0) {
    noPercentageRateLoanCalc(loanDuration, loanAmount);

  } else {
    loanCalc(loanDuration, anualPercentageRate, loanAmount);
  }

  let answer = askForNewCalculation();

  if (answer === 'n') {
    console.log('-----------------------------------------------------');
    console.log('|               Aplication closed                   |');
    console.log('-----------------------------------------------------\n\n');
    break;
  }

}
