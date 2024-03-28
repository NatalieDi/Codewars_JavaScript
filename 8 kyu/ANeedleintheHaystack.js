/*https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle, so:
Example(Input --> Output)
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"*/
// Solution 1

// function findNeedle(haystack) {
//        for (let i = 0; i<haystack.length;i++){
//         if  (haystack[i]=="needle"){
//          return "found the needle at position " + i;
//         } 
        
//     }
// }

// Solution 2

//function findNeedle(haystack) {
//     return haystack.includes('needle')? (`found the needle at position ${haystack.indexOf("needle")}`) : "Your function didn't return anything"
//}

//Solution 3

// function findNeedle(haystack) {
//     if (haystack.indexOf('needle')==-1) return "needle not found"
//     else 
//     return 'found the needle at position '+haystack.indexOf('needle')
// }

//Solution4

function findNeedle(haystack) {
    return (haystack.indexOf('needle')==-1)? "needle not found":'found the needle at position '+haystack.indexOf('needle')
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false])); //
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));
console.log(findNeedle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]));
console.log(findNeedle(['3', '123124234'])); //