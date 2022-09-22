/*
Problem
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

// Solution
/**
 * It takes a number, converts it to a string, splits it into an array, reduces the array to a single
 * number, and if that number is greater than 10, it calls itself with the new number
 * @param n - The number to be summed
 * @returns The sum of the digits of the number.
 */
const digital_root = (n) => {
  const initialValue = 0;
  const str = n.toString().split("");
  const sumOfN = str.reduce(
    (previousValue, currentValue) =>
      parseInt(previousValue) + parseInt(currentValue),
    initialValue
  );
  return sumOfN > 10 ? digital_root(sumOfN) : sumOfN;
};
console.log(digital_root(11));
console.log(digital_root(10));
