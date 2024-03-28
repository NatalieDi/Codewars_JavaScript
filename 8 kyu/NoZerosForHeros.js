/*https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/
noBoringZeros = n => {
  if (n === 0) return 0;
  n = String(n).split('');

  for (let i = n.length - 1; i > 0; i--) {
    if (n[i] === '0') {
      n.pop();
    } else {
      return Number(n.join(''));
    }
  }
}
console.log(noBoringZeros(1450)); //145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105)); // -105
console.log(noBoringZeros(0)); // 0