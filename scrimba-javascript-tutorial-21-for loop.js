//example1

//for(let i=0; i< 5; i++){
//console.log(i);
//}

//example2
//loop 1 = 0 + 1 = 1 
//loop 2 = 1 + 1 = 2
//loop 3 = 2 +1  = 3
//loop 4 = 3 +1  = 4 
//total = 1 + 2 + 3 + 4 =10

//let total1 = 0;
//for(let i=0;i<5; i++){
//  total1+=i;
//}
//console.log(total);

//example #3

let total = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70,80];
for (let i = 0; i<numArray.length; i++){
//         
   //print data housed in each index of numArray
   //console.log(numArray[i]);
   total += numArray[i];
   //console.log(total);
}