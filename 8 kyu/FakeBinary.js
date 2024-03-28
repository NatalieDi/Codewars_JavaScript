/*https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
Note: input will never be an empty string
*/
//Solution 1
/*function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}*/
//Solution 2
// function fakeBin(x) {
//   return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
// }
/*Solution 3*/
function fakeBin(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}

console.log(fakeBin("45385593107843568")); //01011110001100111
console.log(fakeBin("509321967506747")); //101000111101101
console.log(fakeBin("366058562030849490134388085")); //011011110000101010000011011
