/* 
DESCRIPTION:
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

// SOLUTION
const sumStrings = (a, b) => (BigInt(a) + BigInt(b)).toString();

console.log(
  sumStrings("63829983432984289347293874", "90938498237058927340892374089")
);
