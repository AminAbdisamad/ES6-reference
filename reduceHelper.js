// reduce helper

const numbers = [12, 34, 45, 6, 7, 8];
let sum = 0;

// find some of all numbers

for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
sum;

// Now, lets do it using reudce function helper

const sumOfAll = numbers.reduce((sum, number) => (sum += number), 0);

// another example with reduce

colors = [
  { color: "blue" },
  { color: "red" },
  { color: "green" },
  { color: "yellow" }
];

// will display an array with colors [blue,red,yellow]

const primaryColors = colors.reduce((pre, primary) => {
  pre.push(primary.color);
  return pre;
}, []);

primaryColors;

// lets write function that ...

function blancedParams(string) {
  return !string.split("").reduce((previous, char) => {
    // we need to solve )( which starts with -1
    if (previous < 0) return previous;
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

console.log(blancedParams("((()))"));
// should return false

blancedParams("(())"); // should return true
