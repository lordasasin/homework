function lesswords(dizi) {
    let sayac = {};
    let sonuc = [];
  
    for (let i = 0; i < dizi.length; i++) {
      let eleman = dizi[i];
      if (sayac[eleman] === undefined) {
        sayac[eleman] = 1;
      } else {
        sayac[eleman]++;
      }
    }
  
    for (let i = 0; i < dizi.length; i++) {
      let eleman = dizi[i];
      if (sayac[eleman] === 1) {
        sonuc.push(eleman);
      }
    }
  
    return sonuc;
  }
  
  
  
  console.log(lesswords(['a', 'b', 'c', 'a', 'd', 'e', 'b']));
  