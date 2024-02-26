////https://www.codewars.com/kata/55a996e0e8520afab9000055/train/javascript
//Description
//For this problem you must create a program that says who ate the last cookie. 
// If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. 
// If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.
//Test.assertEquals(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
// Test.assertEquals(cookie(26), "Who ate the last cookie? It was Monica!")
// Test.assertEquals(cookie(2.3), "Who ate the last cookie? It was Monica!")
// Test.assertEquals(cookie(true), "Who ate the last cookie? It was the dog!")

// Solution1
// function cookie(x){
//     return typeof x == 'number'? "Who ate the last cookie? It was Monica!": 
//     typeof x == 'string'? "Who ate the last cookie? It was Zach!": 
//     "Who ate the last cookie? It was the dog!"
//     }
//     console.log(cookie("Ryan")); //"Who ate the last cookie? It was Zach!"
//     console.log(cookie(26));     //"Who ate the last cookie? It was Monica!"
//     console.log(cookie(2.3));    //"Who ate the last cookie? It was Monica!"
//     console.log(cookie(true));   //"Who ate the last cookie? It was the dog!"


//Solution2
function cookie(x) {
    if (typeof x === 'string') {
      return 'Who ate the last cookie? It was Zach!';
    } else if (typeof x === 'number') {
      return 'Who ate the last cookie? It was Monica!';
    } else {
      return 'Who ate the last cookie? It was the dog!';
    }
  }
console.log(cookie("Ryan")); //"Who ate the last cookie? It was Zach!"
console.log(cookie(26));     //"Who ate the last cookie? It was Monica!"
console.log(cookie(2.3));    //"Who ate the last cookie? It was Monica!"
console.log(cookie(true));   //"Who ate the last cookie? It was the dog!"