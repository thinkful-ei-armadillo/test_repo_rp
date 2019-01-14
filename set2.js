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
