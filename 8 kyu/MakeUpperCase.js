/* https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/javascript
Descrption
Write a function which converts the input string to uppercase.
*/
function makeUpperCase(str) {
   return str.toUpperCase();
}

console.log(makeUpperCase(""));      //""
console.log(makeUpperCase("hello"));  //"HELLO"
console.log(makeUpperCase("Hello"));  //"HELLO"
console.log(makeUpperCase("HELLO"));  //"HELLO"