let example1 = {
  firstName: 'Dylan',
  lastName: 'Israel',
    address: {
      city: 'Austin',
      state: 'Texas'
  },
      
  age: 30,
  cats: ['Milo','Tito', 'Achieles']
  
};

example1.age = 31;
//expected output: 31
//console.log(example1.age);

//expected output: "Austin"
//console.log(example1.address.city); | expected output: "Austin"

//expected output: ["firstName", "lastname", "address", "agg", "cats" ]
///console.log(Object.keys(example1));

//expected output: ["Dylan". "Isreael", Object{city: "Austin", state: "Texam"}, 31,["Milo", "Tito,", "Achieles"]] 
//console.log(Object.values(example1)); | expected output:

//check if a key exist in an object
//expected output: true
//console.log(example1.hasOwnProperty('firstName'));