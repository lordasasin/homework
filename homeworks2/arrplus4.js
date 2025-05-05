let arr = [2,3,5];

let tempResult = 0;
function arrplus(sonuc){
for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {

        tempResult = arr[i] + arr[j];

        if (tempResult === result) {
            console.log(true);
            return true;
        }
        

    }
}

console.log(false);

}

arrplus(7);