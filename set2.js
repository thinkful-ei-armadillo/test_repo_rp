'use strict';
function jediName(firstName, lastName) {
  const jediName = lastName.slice(0, 3) + firstName.slice(0, 2);
  return jediName;
}

function beyond(num) {
  switch (true) {
    case num === Infinity:
    case num === -Infinity:
      console.log('And beyond');
      break;
    case num > 0:
      console.log('To infinity');
      break;
    case num < 0:
      console.log('To negative infinity');
      break;
    case num === 0:
      console.log('Staying home');
      break;
  }
}

function decode(word) {
  const firstLetter = word.slice(0, 1);
  let index;
  switch (firstLetter) {
    case 'a':
      index = 2;
      break;
    case 'b':
      index = 3;
      break;
    case 'c':
      index = 4;
      break;
    case 'd':
      index = 5;
      break;
    default:
      return ' ';
  }

  return word.charAt(index - 1);
}

function daysInAMonth(month, leapYear = false) {
  let days;
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      days = 31;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      days = 30;
      break;
    case 'February':
      if (leapYear) {
        days = 29;
      } else {
        days = 28;
      }
      break;
    default:
      throw new Error('Must provide a valid month');
  }

  return `${month} has ${days} days`;
}

function rpsGame(choice) {
  if (typeof choice !== 'number' || (choice > 3 || choice < 1)) {
    throw new Error('Please provide a number between 1-3');
  }

  const compChoice = Math.floor(Math.random() * 3) + 1;
  console.log(compChoice);
  const difference = choice - compChoice;
  let message;
  if (difference === 0) {
    message = 'You Tied';
  } else if (difference === -1 || difference === 2) {
    message = 'You win';
  } else {
    message = 'You Lose';
  }

  console.log(message);
}

//third drill
const messageArray = 'craft block argon meter bells brown croon droop'.split(
  ' '
);
let messageDecode = '';

for (let i = 0; i < messageArray.length; i++) {
  messageDecode += decode(messageArray[i]);
}

//fourth drill
//console.log(daysInAMonth('September'));

//fifth drill
rpsGame(2);
