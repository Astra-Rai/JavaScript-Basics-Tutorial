//let example1 = ['Dylan', , true];
//let example2 = example1;

//note: example 2 is reffering/referencing example 1, but it's not creating a 
//new array
//console.log(example1);
//expected output ["Dylan", undefined, true]


//pushd value 11 to example 1 and 2
//example2.push(11);
//console.log(example2);
//expected output: ["Dylan, undefined, true, 11"]

//console.log(example2);
//expected output: same as one above

//console.log(example1);
//rember, example2 is referencing ex1, how can we create a new array

//let example2  = [...example1];
//array method that creates a brand new array
let example1 = ['Dylan', 5, true];
let example2 = example1.map((element) => {
  return element;                           
                           
});

example2.push(11);

//console.log(example1);
//console.log(example2);