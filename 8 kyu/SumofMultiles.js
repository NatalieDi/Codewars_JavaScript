/*https://www.codewars.com/kata/57241e0f440cd279b5000829/javascript
Find the sum of all multiples of n below m
Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
*/
function sumMul(n,m){
    if (n >=m) return "INVALID";
     var multy = 0
     var sum = 0
           while (multy < m) {
               multy +=n
               if (multy>=m) break
               sum +=multy}
           return sum;
}
console.log(sumMul(0,0)); //"INVALID"
console.log(sumMul(2,9)); //20
console.log(sumMul(4,-7)); //"INVALID"
console.log(sumMul(4,123)); //1860
console.log(sumMul(123,4567)); //86469

