/**
 * 
 * DESCRIPTION:
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
 */

/**
 * We iterate through the string, pushing each brace onto a stack. If the current brace is the closing
 * brace of the last brace on the stack, we pop the last brace off the stack. If the stack is empty at
 * the end, the string is valid
 * @param str - the string to be checked
 * @returns a boolean value.
 */
const validBraces = (str) => {
  let braces = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (const char of str) {
    console.log(char);
    if (stack.length > 0 && braces[stack[stack.length - 1]] == char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length == 0;
};
console.log(validBraces("(}"));

// OPTION TWO

function br(braces) {
  while (
    braces.indexOf("()") != -1 ||
    braces.indexOf("{}") != -1 ||
    braces.indexOf("[]") != -1
  ) {
    braces = braces.replace("()", "").replace("{}", "").replace("[]", "");
  }
  return braces.length == 0;
}
console.log(br("(){}[]"));

//OPTION THREE

function validBraces2(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
console.log(validBraces2("(){}[]"));
