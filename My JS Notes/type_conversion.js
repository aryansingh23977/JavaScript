//let score = 33;
// console.log(typeof(score))
// console.log(typeof score);

//Output is Number for both.

// In another condition if we take a non number thing change its type to number, we see JS changes its type to number.But if we check its real type it is still a NaN(Not a number).This shows we can change the type to a number even if it is not a number. Lets see,
let score = "33abc"
// console.log(typeof(score)) //string
// console.log(typeof score) //string
let aryan=Number(score) 
//console.log(typeof aryan) //number
//console.log(aryan) //NaN


//*******************OPERATIONS***********************/

let value=5
let negValue=-value
// console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2/2) //divide
// console.log(2*2) //multiply
// console.log(2**3) //power
// console.log(2%3) //Remainder

//Joining strings
let str1="Aryan"
let str2=" Singh"
let str3=str1+str2;
console.log(str3)