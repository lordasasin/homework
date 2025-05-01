let arr1 = [24, 42, 12, 21, 51];
let arr2 = [24, 42, 12, 21, 53];
let arr3 = [];

for (let i = 0; i < 4; i++){


    arr3[i] = 0;

    if (arr1[i] === arr2[i]){

        arr3[i] += arr1[i];
        
    }
}

console.log(arr3);
