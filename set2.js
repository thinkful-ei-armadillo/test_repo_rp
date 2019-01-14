'use strict';
/*
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
*/
function decode(word) {
  const firstLetter = word.slice(0,1);
  let index;
  switch(firstLetter){
    case 'a': 
      index=2;
      break;
    case 'b':
      index=3;
      break;
    case 'c':
      index = 4;
      break;
    case 'd':
      index = 5;
      break;
    default :
      return ' ';
  }

return word.charAt(index-1);

}

const messageArray = 'craft block argon meter bells brown croon droop'.split(' ');
let messageDecode = '';

for(let i=0; i<messageArray.length; i++) {
  messageDecode += decode(messageArray[i]);
}

console.log(messageDecode);

