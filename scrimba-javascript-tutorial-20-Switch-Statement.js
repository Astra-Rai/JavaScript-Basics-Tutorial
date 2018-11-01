//Notes: Switch Statement 
/*
The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
*/

let studentAnswer = '';

switch(studentAnswer){
  case 'A':
    console.log('A is wrong.');
    break;
    
  case 'B':
    console.log('B is wrong.');
    break;
    
  case 'C':
    console.log('C is wrong.');
  
  default:
    console.log('Not a real answer')
    //default:denotes end of switch statement
 
  //expectd output of statement, A is wrong
}