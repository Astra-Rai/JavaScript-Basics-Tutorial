//Notes: For Loop:

/*The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.*/

//Exmaple 1:

/*for (let i = 0; i < 5; i ++){
//console.log(i);
}
*/

/*
Expected Output: 
0
1, 0 + 1 = 1
2, 1 + 1 = 2
3, 2 + 1 = 3  
4, 3 + 1 = 4
*/

//Example 2 

let total = 0;
for (let i = 0; i < 5; i++){
  total +=1;
}

console.log(total);
//expected output = 5