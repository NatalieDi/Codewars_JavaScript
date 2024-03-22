/*https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
Description
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
// function invert(array) {
//     if (array.length==1) return array;

//     for (let i = 0; i<array.length; i++){
//       array[i] = array[i]*(-1);
//     }
//       return array;
// }

const invert = array => array.map(num => -num);

console.log(invert([1,-4,7,12])); //[-1,4,-7,-12]
console.log(invert([1,2,3,4,5])); //[-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])); //[-1,2,-3,4,-5]
console.log(invert([])); //[]
console.log(invert([-1,-2,-3,-4,-5])); //[1,2,3,4,5]
console.log(invert([0])); //[0]