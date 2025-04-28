function countLetter(word,letter) {
    let count = 0;

    
    for (let i = 0; i < word.length; i++) {
        
        if (word[i] === letter) {
            count++;
        }
    }

    return count;
}


let word = "Merhabalar";
let letter = "a";  
console.log("Harfin sayısı:", countLetter(word,letter));