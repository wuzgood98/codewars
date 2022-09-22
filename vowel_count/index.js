/*
Problem
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

// SOLUTION
/**
 * If the string doesn't contain any vowels, return 0. Otherwise, return the number of vowels in the
 * string
 * @param str - the string we are searching
 * @returns The number of vowels in the string.
 */
const getCount = (str) => {
  let number = 0;
  const vowels = /[aeiou]/g;

  if (!str.match(vowels)) {
    return number;
  } else {
    number = str.match(vowels).length;
  }
  return number;
};
getCount("pxy");
