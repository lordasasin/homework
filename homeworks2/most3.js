function most(str) {
    let harfSayilari = {};
    let maxHarf = '';
    let maxSayi = 0;
  
    for (let i = 0; i < str.length; i++) {
      let harf = str[i];
  
      if (harfSayilari[harf] === undefined) {
        harfSayilari[harf] = 1;
      } else {
        harfSayilari[harf]++;
      }
  
      if (harfSayilari[harf] > maxSayi) {
        maxHarf = harf;
        maxSayi = harfSayilari[harf];
      }
    }
  
    return maxHarf;
  }
  
  console.log(most("Merhaba benim adım yasaf"));