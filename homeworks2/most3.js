function most(str) {
  let letterCount = {};
  let maxLetter = '';
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
      let letter = str[i];

      if (letterCount[letter] === undefined) {
          letterCount[letter] = 1;
      } else {
          letterCount[letter]++;
      }

      if (letterCount[letter] > maxCount) {
          maxLetter = letter;
          maxCount = letterCount[letter];
      }
  }

  return maxLetter;
}

console.log(most("Merhaba benim adım yasaf"));
