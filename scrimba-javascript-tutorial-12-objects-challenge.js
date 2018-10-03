let example1 = {
  firstName: 'Dylan'  
};

let example2 = Object.assign({ }, example1);
//this line of code, changed to what's above | let example2 = example1;
example2.lastName = 'Israel';
//console.log(example2)
//console.log(example2.lastName);

//note, technically, lastName property does not exist, code passes 
//by references??

//Object.assign allows instantiating a new object, valuse of example1 go into exmpale to. values in example1 are not changed
//mdn example

const object1 ={
  a: 1,
  b: 2,
  c: 3
  
};

const object2 = Object.assign({d:5, e:9}, object1);
//console.log(object2.c, object2.d)
//console.log(object2);
//console.log(object2.d);
//console.log(object1);//note object1 content isn't changed

//Object.assign()method is used to copy the vaules of all enumerable own propeties from one or more sources to a target object. It will return a target object