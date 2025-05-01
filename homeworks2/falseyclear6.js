const values = ["", 0, false, null, undefined, 23 , "hello", 42];

let result = "";
let falsy= 0;

for (let i = 0; i < values.length; i++) {
  if (values[i]) {

    result += values[i];
  }
  else{
    falsy = falsy + 1 ;
  }
  
}

console.log(result);
console.log(falsy);


