/*https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
Descrption
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/
function findAverage(array) {
    var sum = 0;
    var i = 0;
        if (array.length > 0){
            for (i in array){ 
                sum += array[i];
            }
            return sum/array.length;
        } 
        else
            return 0;
}
console.log(findAverage([1,1,1])); //1
console.log(findAverage([1,2,3])); //2
console.log(findAverage([1,2,3,4])); //2.5
console.log(findAverage([])); //0