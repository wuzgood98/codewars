/*
Problem
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
*/

/**
 * We loop through the items array and push each item to the order array if it's not equal to the next
 * item in the array
 * @param items - an array of items
 * @returns An array of the items in the order they appear in the original array, with duplicates
 * removed.
 */
const uniqueInOrder = (items) => {
  let order = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== items[i + 1]) {
      order.push(items[i]);
    }
  }
  return order;
};

uniqueInOrder("AAAABBBCCDAABBB");
