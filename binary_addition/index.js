/*
Problem
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

// Solution
/**
 * It takes two numbers, adds them together, and returns the result in binary
 * @param num1 - The first number to be converted to binary.
 * @param num2 - The number to be added to num1.
 * @returns The binary representation of the sum of the two numbers.
 */
const numInBinary = (num1, num2) => {
  return (num1 + num2).toString(2);
};
