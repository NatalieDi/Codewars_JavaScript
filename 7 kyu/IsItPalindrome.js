//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
//Description
//Write a function that checks if a given string (case insensitive) is a palindrome.
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
function isPalindrome(x) {
    for (let i=0; i< x.length;i++){
        if(x.at(i)!=x.at(x.length)){return false}
    }
    return true;
    //return x.split("").reverse().join("").toLowerCase()=== x.toLowerCase()
}
console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
console.log(isPalindrome(""));