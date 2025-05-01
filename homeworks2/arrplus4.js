let arr = [2,3,5];
let sonuc = 7;
let cakmasonuc = 0;

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        cakmasonuc = arr[i] + arr[j];

        if (cakmasonuc === sonuc) {
            console.log(true);
            return true;
        }
        

    }
}

console.log(false);
