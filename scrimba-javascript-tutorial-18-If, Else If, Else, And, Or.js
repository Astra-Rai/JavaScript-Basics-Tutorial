//Notes:
/*
The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.
*/

let example  = 5;

if (example === 5 || true === true){
  console.log('Runs');//-->"Runs}

} else if (false){
  console.log('else if');

} else{
  console.log('else');
}