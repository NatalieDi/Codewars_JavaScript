/*https://www.codewars.com/kata/59fc72fe235f93838b002235/train/javascript
The function takes in 2 inputs x and y, and should return x to the power of y
Simple, right? But you're NOT allowed to use Math.pow();
Obs: x and y will be naturals, so DON'T take fractions into consideration;
Note : zero to the power of zero equals one in this kata
Great coding <3
*/
function power(x, y) {
  let result = 1;
  if (x === 0 && y === 0) {
    return 1;
  } else {
    for (let i = 1; i <= y; i++) {
      result = x * result;
    }
  }
  return result;
}
console.log(power(1,701270));// 1
console.log(power(2,2)); // 4
console.log(power(3,2)); // 9
console.log(power(-1,40)); // 1
