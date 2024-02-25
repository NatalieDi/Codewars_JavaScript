////https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
//Description
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9.
//ARRAYS LISTS FUNDAMENTALS
function squareSum(numbers){
    let sum=0;
    for (let i = 0; i<numbers.length; i++){
      sum += numbers[i]**2;
    }
      return sum;
    }
    console.log(squareSum([1,2,2]));//9