function parenthesisChecker(str) {
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
      let character = str[i];

      if (character === '(') {
          counter++;
      } else if (character === ')') {
          counter--;
          if (counter < 0) {
              return false;
          }
      }
  }

  return counter === 0;
}

console.log(parenthesisChecker("(Merhablar"));
