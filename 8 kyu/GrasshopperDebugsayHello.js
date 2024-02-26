////https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript
//Description
//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. 
//It is your job to fix the code and get the program working again!
//Example output:
//Hello, Mr. Spock
//Solution1
// function sayHello(name) {
//     return 'Hello, '+ name;
//  }
//console.log(sayHello('Mr. Spock'));//Hello, Mr. Spock

//Solution2
function sayHello(name) {
   return `Hello, ${ name}`
}

console.log(sayHello('Mr. Spock'));//Hello, Mr. Spock