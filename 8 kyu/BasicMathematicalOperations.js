/*https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
Description
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7 */
function basicOp(operation, value1, value2)
{
 switch (operation) {
  case '+':
    return value1 + value2;
    break;
  case '-':
    return value1 - value2;
    break;
  case '*':
    return value1 * value2;
    break;
  case '/':
     if (value2==0) {return "Division by Zero"}
     else{
    return value1 / value2;
    break;
     }
  default:
    text = "No value found";
}
}

console.log(basicOp("+", 4, 7)); // 11  "4 + 7 = 11"
console.log(basicOp("-", 15, 18)); // -3 "15 - 18 = -3"
console.log(basicOp("*", 5, 5)); // 25 "5 * 5 = 25"
console.log(basicOp("/", 49, 7)); // 7; "49 / 7 = 7"