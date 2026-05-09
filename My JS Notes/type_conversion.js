let score = 33;
console.log(typeof(score))
console.log(typeof score);

//Output is Number for both.

// In another condition if we take a non number thing change its type to number, we see JS changes its type to number.But if we check its real type it is still a NaN(Not a number).This shows we can change the type to a number even if it is not a number. Lets see,
let score = "33abc"
console.log(typeof(score));

