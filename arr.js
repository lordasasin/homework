let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 2;

let result = [];
let temp = [];


for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i]);


    if (temp.length === size) {
        result.push(temp);
        temp = [];
    }
}


if (temp.length > 0) {
    result.push(temp);
}

console.log(result);