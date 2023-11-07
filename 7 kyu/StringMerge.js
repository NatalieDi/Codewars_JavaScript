//https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript
//Description
//Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. 
//The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. 
//You can assume both words will contain the dividing letter.

//Examples
//("hello", "world", "l")       ==>  "held"
//("coding", "anywhere", "n")   ==>  "codinywhere"
//("jason", "samson", "s")      ==>  "jasamson"
//("wonderful", "people", "e")  ==>  "wondeople"
function stringMerge(string1, string2, letter){
    let i = string1.indexOf(letter)
    let j = string2.indexOf(letter)
    return string1.slice(0,i)+string2.slice(j)
}
console.log(stringMerge("hello", "world", "l"));
console.log(stringMerge("coding", "anywhere", "n"));
console.log(stringMerge("jason", "samson", "s"));
console.log(stringMerge("wonderful", "people", "e"));