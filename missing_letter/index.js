/**
 * If the difference between the current letter and the previous letter is not 1, return the letter
 * that is missing.
 * @param array - an array of letters
 * @returns the missing letter in the array.
 */
const missingLetter = (array) => {
  for (let i = 1; i < array.length; i++) {
    const previousLetter = array[i - 1].charCodeAt();
    const currentLetter = array[i].charCodeAt();
    if (currentLetter - previousLetter !== 1) {
      return String.fromCharCode(previousLetter + 1);
    }
  }
  return null;
};

console.log(missingLetter(["a", "b", "c", "d", "f"]));
