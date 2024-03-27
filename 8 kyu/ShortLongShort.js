/*https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
Hint for R users:
The length of string is not always the same as the number of characters
For example: (Input1, Input2) --> output
("1", "22") --> "1221"
("22", "1") --> "1221" */

function solution(a, b){
    if ( a.length ==0) {return b}
     if ( b.length ==0) {return a}
     if ( a.length < b.length) {return `${a}${b}${a}`}
     else {return `${b}${a}${b}`}
}

console.log(solution('45', '1')); //1451
console.log(solution('13', '200')); //1320013
console.log(solution('Soon', 'Me')); //MeSoonMe
console.log(solution('U', 'False')); //UFalseU