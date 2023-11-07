//https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/javascript
//Description
//We need a function that can transform a number (integer) into a string.
//What ways of achieving this do you know?

//Examples (input --> output):
//123  --> "123"
//999  --> "999"
//-100 --> "-100"

// solution 1

//function numberToString(num) {
//   return String(num)
//} 

// solution 2

  numberToString = num => num + ''
  
  console.log(numberToString(123));
  console.log(numberToString(999));
  console.log(numberToString(-100));
