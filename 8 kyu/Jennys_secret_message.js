/* https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
Descrption
Write a function which converts the input string to uppercase.
*/
function greet(name){
    return name == "Johnny"? "Hello, my love!": `Hello, ${name}!`
}
console.log(greet("Jim")); //"Hello, Jim!"
console.log(greet("Jane")); // "Hello, Jane!"
console.log(greet("Simon")); //"Hello, Simon!"
console.log(greet("Johnny")); //"Hello, Simon!"