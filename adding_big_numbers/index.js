/* 
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
 */

// SOLUTION
/**
 * "While there are still digits to process, add the last digit of each number, and if the result is
 * greater than 9, carry the 1 to the next column."
 *
 * The ~~ operator is a fast way to convert a string to an integer
 * @param a - The first number to add
 * @param b - the second number
 * @returns The sum of the two numbers.
 */
function add(a, b) {
  var result = "";
  var carry = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop();
    console.log(carry);
    result = (carry % 10) + result;
    console.log(result);
    carry = carry > 9;
    console.log(carry);
  }
  return result;
}

console.log(add("123", "321"));
