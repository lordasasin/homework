function Anagram(str1, str2) {
    
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
    else{
    let sayac = 0;
    for (let i = 0; i < cleanedStr1.length; i++) {
        for (let j = 0; j < cleanedStr2.length; j++) {
            
            if (cleanedStr1[i] === cleanedStr2[j]) {
                sayac += 1 ;
            
            }
            
            
        }
       
    }
    if(sayac === cleanedStr1.length){   
        return true ;
       }
       else{
           return false ;
            }
    
}
}
let str1 = "sfu";
let str2 = "fus";

console.log(Anagram(str1, str2));
