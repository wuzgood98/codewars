/*
  Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.


 */

// SOLUTION

/**
 * It takes a string, checks if the last character is a number, if it is, it replaces the last number
 * with the next number, if it isn't, it adds a 1 to the end of the string
 * @param string - the string to increment
 * @returns the string with the last number incremented by 1.
 */
const incrementString = (string) => {
  if (isNaN(parseInt(string[string.length - 1]))) return string + 1;
  return string.replace(/(0*)(\d+$)/, (_, p1, p2) => {
    let increment = parseInt(p2) + 1;
    return increment.toString().length > p2.length
      ? p1.slice(0, -1) + increment
      : p1 + increment;
  });
};

console.log(incrementString("foo0123"));
