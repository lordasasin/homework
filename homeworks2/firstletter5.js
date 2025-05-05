function firsletterbig(str) {
    let result = '';
    let newWord = true;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === ' ') {
            newWord = true;
            result += char;
        } else {
            if (newWord) {
                char = char.toUpperCase();
            }
            newWord = false;
            result+= char;
        }
    }

    return result;
}

let str = "merhabalar benim adım yusuf";
console.log(firsletterbig(str));

