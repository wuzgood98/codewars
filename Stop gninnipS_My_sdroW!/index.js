/**
 * DESCRIPTION:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
 */

// SOLUTION
const string = "Hey fellow warriors";

const spinWords = (string) => {
  let stringArray = string.split(" ");
  let spunString = "";
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      stringArray[i] = stringArray[i].split("").reverse().join("");
    } else {
      stringArray[i] = stringArray[i];
    }
    spunString = stringArray.join(" ");
  }
  return spunString;
};

console.log(spinWords(string));

/**
 * We use a regular expression to find all words with 5 or more characters, and then we use the replace
 * method to replace those words with the same word, but reversed
 * @param string - The string to be evaluated.
 */
const spinWords2 = (string) =>
  string.replace(/\w{5,}/g, (w) => w.split("").reverse().join(""));
console.log(spinWords2(string));

/**
 * Split the string into an array of words, map over the array, if the word is longer than 4
 * characters, reverse the word, join the word back together, and return the word, otherwise return the
 * word, join the array back together, and return the string
 * @param string - the string to be evaluated
 * @returns a string.
 */
const spinWords3 = (string) => {
  return string
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
};

console.log(spinWords3(string));
