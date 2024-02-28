//https://www.codewars.com/kata/57274562c8dcebe77e001012
//Description
//Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). 
//you can use one of slice() substring() or substr() do it. return the result after finished the work.

// for example:
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]


function cutIt(arr){
    let smallest = arr[0];
    let newarr=[];
   
for(let i = 1; i<arr.length; i++){
    if (arr[i].length< smallest.length)
    smallest = arr[i];
}
for (var small of arr){
    if (small.length>= smallest.length){
        newarr.push(small.slice(0, smallest.length));
    } 
}
return newarr;
}
console.log(cutIt(["ab","cde","fgh"]));      // [ 'ab', 'cd', 'fg' ]
console.log(cutIt(["abc","defgh","ijklmn"])) // ["abc","def","ijk"]
console.log(cutIt(["codewars","javascript","java"]))   // ["code","java","java"]