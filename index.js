//arrays

let example1 =[5,6,7];
//console.log(example1[1]);
//expected output: 6

example1.push(8);
//console.log(example1);
//8 added to end of array example1
//expected output: [5,6,7,8];

example1.pop();
//console.log(example1);
//pop(), will remove last value
//expected output: [5,6,7,];

//how to override values
let example2 = [7,6,8];
//example2[0] = 1;
//console.log(example2);
//expected output: [1,6,7]

example2.forEach((element2) => {
  //console.log(element2);
  
});
//expected output: 1 6 8 (listed vertically)