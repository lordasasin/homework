function countVowels(str) {
    const vowels = "aeiou";
    str = str.toLowerCase();

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

let sentence = "Merhabalar Otobotlar";
console.log("Cümlenizdeki Sesli harf sayısı:", countVowels(sentence));
