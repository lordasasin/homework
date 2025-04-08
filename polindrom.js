function isPalindrome(str) {
    
    let cleanedStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            cleanedStr += str[i];  
        }
    }

   
    let reversed = "";
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversed += cleanedStr[i];  
    }

    
    if (cleanedStr === reversed) {
        return "True";
    } else {
        return "False";
    }
}

const word = "no lemon no melon";
console.log(isPalindrome(word));  
