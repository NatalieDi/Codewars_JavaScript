/*
https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript
Description:
In this Kata you should fix/create a program that returns the following values:
false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.
func myFirstKata(a b) {
  if {typeof(a) !! "number" or typeof(b) !! "number"} (
    false;
  ) else (
    a % b ++ b % a;
  )
}
Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.
Test.assertEquals(myFirstKata(3,5),(3 % 5 + 5 % 3));
Test.assertEquals(myFirstKata("hello",3),false);
Test.assertEquals(myFirstKata(67,"bye"),false);
Test.assertEquals(myFirstKata(true,true),false);
Test.assertEquals(myFirstKata(314,107),(107 % 314 + 314 % 107));
Test.assertEquals(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));
 */
/* solution 1

function myFirstKata(a, b) {
    if (typeof(a) == 'number' && typeof(b) == 'number'){
     return  a % b + b % a;
    }
    else return false;
}
*/
// solution 2

myFirstKata = (a,b) => typeof a == 'number' && typeof b == 'number' ? a % b + b % a :false

console.log(myFirstKata(3,5));//5
console.log(myFirstKata("hello",3));//false
console.log(myFirstKata(67,"bye"));//false
console.log(myFirstKata(true,true));//false
console.log(myFirstKata(314,107));//207
console.log(myFirstKata(19483,9));//16