/*https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
Description
I'm new to coding and now I want to get the sum of two arrays... 
Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too. */
/*Solution 1
function arrayPlusArray(arr1, arr2) {
    var sum = 0;
  
    for (i = 0; i < arr1.length; i++){ 
      sum += arr1[i];
      }
    for (j = 0; j < arr2.length; j++){ 
      sum += arr2[j];
      }
      return sum;
}
*Solution 2*/
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // 21
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])), -21
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); // 15
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600])); // 2100