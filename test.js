/**
 * It takes a number as an argument, creates an array of all numbers up to that number, filters the
 * array to only include numbers divisible by 3 or 5, and then sums the remaining numbers
 * @param num - the number to count up to
 * @returns The sum of all the multiples of 3 and 5 below the number passed in.
 */
const sumOfMultiples = (num) => {
  let allNumbers = [];
  const initialValue = 0;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    allNumbers.push(i);
    sum = allNumbers
      .filter((numbers) => numbers % 3 === 0 || numbers % 5 === 0)
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
  }
  return sum;
};

console.log(sumOfMultiples(10));
console.log(sumOfMultiples(23));
console.log(sumOfMultiples(43));

/* OR */
const sumOfMultiples2 = (num) => {
  const initialValue = 0;
  return [...Array(num).keys()]
    .filter((numbers) => numbers % 3 === 0 || numbers % 5 === 0)
    .reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
};

console.log(sumOfMultiples2(10));
console.log(sumOfMultiples2(23));
console.log(sumOfMultiples2(43));

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
/**
 * It takes a string, finds the last character of the string, finds the index of that character in the
 * alphabets array, and returns the next character in the alphabets array
 * @param str - The string to be converted to the next alphabet.
 * @returns The next alphabet in the alphabet array.
 */
const nextAlphabet = (str) => {
  let lastIndexOfStr = str.indexOf(str[str.length - 1]);
  return alphabets.at(lastIndexOfStr + 1);
};

console.log(nextAlphabet(["a", "b", "c", "d"]));

/**
 * Find the last letter of the string, convert it to a number, add one to it, and convert it back to a
 * letter.
 * @param str - the string to search
 * @returns The next letter in the alphabet.
 */
const nAlphabet = (str) => {
  // find last letter
  let lastLetter = str[str.length - 1].charCodeAt();
  return String.fromCharCode(lastLetter + 1);
};

console.log(nAlphabet(["a", "b", "c", "d"]));

/**
 * We loop through the array of letters, and if the current letter's charCodeAt() minus the previous
 * letter's charCodeAt() is not equal to 1, then we return the missing letter
 * @param letters - an array of letters
 * @returns The missing letter in the array of letters.
 */
const missingLetter = (letters) => {
  for (let i = 1; i < letters.length; i++) {
    //find the previous letter
    let previousLetter = letters[i - 1].charCodeAt();
    //find the current letter
    let currentLetter = letters[i].charCodeAt();
    if (currentLetter - previousLetter !== 1) {
      return String.fromCharCode(previousLetter + 1);
    }
  }
  return null;
};

console.log(missingLetter(["O", "Q", "R", "S"]));

const braces = {
  "(": ")",
  "{": "}",
  "[": "]",
};
console.log(braces["("]);

/**
 * If the last character in the stack is the opening brace of the current character, pop it off the
 * stack. Otherwise, push the current character onto the stack
 * @param str - the string to be checked
 * @returns the length of the stack.
 */
function validBraces(str) {
  let stack = [];
  for (const char of str) {
    if (stack.length > 0 && braces[stack[stack.length - 1]] == char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
}

console.log(validBraces("(){}[]"));

const randomNum1 = () => Math.floor(Math.random() * 255) + 1;
const randomNum2 = () => Math.floor(Math.random() * 255) + 1;
const randomNum3 = () => Math.floor(Math.random() * 255) + 1;
let num1 = randomNum1(),
  num2 = randomNum2(),
  num3 = randomNum3();
const rgb = () => `rgb(${num1}, ${num2}, ${num3})`;
console.log(rgb());

const randomNum4 = () => Math.floor(Math.random() * 360) + 1;
const randomNum5 = () => Math.floor(Math.random() * 100) + 1;
const randomNum6 = () => Math.floor(Math.random() * 100) + 1;
let num4 = randomNum4(),
  num5 = randomNum5(),
  num6 = randomNum6();
const hsl = () => `hsl(${num4}, ${num5}%, ${num6}%)`;
console.log(hsl());

const randomPickerNum = () =>
  Math.floor(Math.random() * (0xffffff + 1))
    .toString(16)
    .padStart(6, 0);
let num = randomPickerNum();
const picker = () => `#${num}`;
console.log(picker());

const narcissistic = (value) => {
  let initialValue = 0;
  let sum = 0;
  let allNumbers = [];
  let nums = value.toString().split("");
  for (let i = 0; i < nums.length; i++) {
    let pow = Math.pow(nums[i], nums.length);
    allNumbers.push(pow);
    sum = allNumbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    if (sum === value) return true;
  }
  return false;
};

console.log(narcissistic(371));

/* time in am and pm */
const hours = new Date().getHours() % 12;
const min = new Date().getMinutes() % 60;
const seconds = new Date().getSeconds() % 60;
