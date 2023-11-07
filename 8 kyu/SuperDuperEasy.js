//https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/javascript
//Description
//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

// solution 1

//function problem(x){
//    if (typeof x == "number") {return x*50+6;} 
//    else {return "Error";}
//}

// solution 2

problem = x => typeof x=='number' ? x*50+6 :"Error"

console.log(problem("hello"));//"Error"
console.log(problem(1));//56
console.log(problem(5));//256
console.log(problem(0));//6
console.log(problem(1.2));//66
console.log(problem(3));//156
console.log(problem("RyanIsCool"));//Error
console.log(problem(-3));//-144
console.log(problem(""));//Error
console.log(problem(0.03));//7.5