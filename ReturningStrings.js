//https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
//Description
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//[Make sure you type the exact thing I wrote or the program may not execute properly]
//What ways of achieving this do you know?

//Examples (input --> output):
//"Ryan", "Hello, Ryan how are you doing today?"
//"Shingles", "Hello, Shingles how are you doing today?"

function greet(name){
    return "Hello, "+ name+" how are you doing today?";
}
console.log(greet("Ryan"));
console.log(greet("Shingles"));