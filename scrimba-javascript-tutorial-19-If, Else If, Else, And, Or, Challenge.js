//Notes:
/*
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
*/

console.log(10===10 && 5 < 4);
//expected output: false

console.log(10===10 || 5 < 4 );
//expected output: true

console.log( 5 >= 5 || 4>4) && ( 3 + 2 === 5 );
//expected output: true