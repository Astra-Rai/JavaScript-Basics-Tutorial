//Example 1
/*
let count = 0;

while(count < 20){
  count++;
}
console.log(count);
//expected output: 20

*/

let count = 0;

while (true){
  count++;
  if(count >=20){
    break;
  }
}
console.log(count);
//expected output
//note, white typing code out, I created an infinited loop??
//while (true)
//count++;//this is what lead to an infinite loop.