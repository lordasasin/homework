function parantezcontroler(str) {
    let sayac = 0;
  
    for (let i = 0; i < str.length; i++) {
      let karakter = str[i];
  
      if (karakter === '(') {
        sayac++;
      } else if (karakter === ')') {
        sayac--;
        if (sayac < 0) {
          return false;
        }
      }
    }
  
    return sayac === 0;
  }
  
  console.log(parantezcontroler("(Merhablar")); 
   
  