function Anagram(str1, str2) {
    str1 = str1.replace(/[.,:;!?'"()\[\]{}<>-]/g, "");
    str2 = str2.replace(/[.,:;!?'"()\[\]{}<>-]/g, "");

    let cleanedStr1 = "";
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== " ") {
            cleanedStr1 += str1[i];  
        }
    }

    let cleanedStr2 = "";
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] !== " ") {
            cleanedStr2 += str2[i];  
        }
    }

    cleanedStr1 = cleanedStr1.toLowerCase();
    cleanedStr2 = cleanedStr2.toLowerCase();

    if (cleanedStr1.length !== cleanedStr2.length) {
        return false;
    }

    let count = {};

    for (let i = 0; i < cleanedStr1.length; i++) {
        let char = cleanedStr1[i];
        count[char] = (count[char] || 0) + 1;
    }

    for (let i = 0; i < cleanedStr2.length; i++) {
        let char = cleanedStr2[i];
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}

const str1 = "no";
const str2 = "on";

console.log(Anagram(str1, str2));
