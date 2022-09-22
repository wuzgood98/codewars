/*
Problem
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

/**
 * We create an empty string and an empty array. We then loop through the string and push the string to
 * the array. We then capitalize the first letter of each string and lowercase the rest of the letters.
 * We then join the array with a dash and return the new string
 * @param str - the string to be manipulated
 * @returns a string with the first letter of each word capitalized and the rest of the letters
 * lowercase.
 */
const accum = (str) => {
  let newStr = "";
  let newStrArr = [];
  for (let i = 0; i < str.length; i++) {
    /* Taking the string and repeating it by the index + 1. */
    newStr = str[i].repeat(i + 1);
    newStrArr.push(newStr);
    /* Taking the first letter of the string and capitalizing it and then taking the rest of the string
    and lowercasing it. */
    newStrArr[i] =
      newStrArr[i].charAt(0).toUpperCase() +
      newStrArr[i].slice(1).toLowerCase();
  }
  newStr = newStrArr.join("-");
  return newStr;
};

console.log(accum("abcd"));
// next solution
function accums(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
