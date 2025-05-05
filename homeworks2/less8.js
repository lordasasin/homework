function lessWords(arr) {
  let wordCount = {};
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (wordCount[element] === undefined) {
      wordCount[element] = 1;
    } else {
      wordCount[element]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (wordCount[element] === 1) {
      result += element;
    }
  }

  return result;
}

console.log(lessWords("Merhabalar Benim Adım"));
