/*https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
Description
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
Solutition 1
function smash (words) { 
 return words.join(" ");
}

Solutition 2*/

function smash (words) {
    return (words.length == 0 ) ? "": words.length == 1 ? words[0]: words.join(' '); 
}

console.log(smash(["this", "is", "a", "really", "long", "sentence"])); //"this is a really long sentence"
console.log(smash(["hello", "world"]));// "hello world"
console.log(smash(["hello", "amazing", "world"])); // "hello amazing world"