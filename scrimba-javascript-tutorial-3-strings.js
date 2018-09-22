let firstName = 'Astra';
let lastName = 'Rai';


console.log(`${firstName} ${lastName}`.toUpperCase());
//expected output "ASTRA RAI"
//The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.
console.log(`${firstName} ${lastName}`.split(' '));
//expected output ["Astra","Rai"]
//The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
console.log(`${firstName} ${lastName}`.split(''));
//expected output: ["A", "s", "t", "r", "a", " ", "R", "a", "i"]

console.log(firstName[2]);
//expected output "t", "t" is the at the second index of the string 'Astra'

console.log(`${firstName} ${lastName}`.length);
//expected output: p
//The length property of a String object indicates the length of a string, in UTF-16 code units.