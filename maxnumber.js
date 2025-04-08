let arr = [15, 24, 52, 12, 42, 57];

let max = arr[0]; 

let min = arr[0]; 

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}



console.log(`Max number is : ${max}\nMin Number is : ${min}`)

 