/* 
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

// SOLUTION

/**
 * "The password must contain at least one lowercase letter, one uppercase letter, one number, and be
 * longer than six characters."
 *
 * The function should return true if the password is valid and false if it's not
 * @param password - the password to validate
 */
const validate = (password) =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
console.log(validate("JHD5FJ53"));
