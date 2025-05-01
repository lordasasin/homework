function firsletterbig(str) {
    let sonuc = '';
    let yeniKelime = true;

    for (let i = 0; i < str.length; i++) {
        let karakter = str[i];

        if (karakter === ' ') {
            yeniKelime = true;
            sonuc += karakter;
        } else {
            if (yeniKelime) {
                karakter = karakter.toUpperCase();
            }
            yeniKelime = false;
            sonuc += karakter;
        }
    }

    return sonuc;
}

let str = "merhabalar benim adım yusuf";
let sonuc = firsletterbig(str);

console.log(sonuc);
