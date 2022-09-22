/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


*/

let walk = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];
testWalk(walk);
function testWalk(walk) {
  let n = 0,
    s = 0,
    e = 0,
    w = 0;
  if (walk.length !== 10) {
    return false;
  }
  for (let i = 0; i < walk.length; i++) {
    let direction = walk[i];
    if (direction === "n") {
      n++;
    } else if (direction === "s") {
      s++;
    } else if (direction === "e") {
      e++;
    } else if (direction === "w") {
      w++;
    }
  }
  if (n === s && e === w) {
    return true;
  } else {
    return false;
  }
}
