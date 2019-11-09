// rest and spread
// rest[...] could be used mostly in a function args
// spread [...] could be used to flatten array

function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
function displayNames(names) {
  return names.split("").map(name => name);
}

console.log(addNumbers(12, 34, 45, 56, 67));
console.log(displayNames("Hassan"));

// Spread ...

const primaryColors = ["red", "green"];
const secondaryColors = ["white", "black"];
const colorTheme = [
  "blue",
  ...primaryColors,
  "yellow",
  ...secondaryColors,
  "pink"
];
colorTheme;

function alwaysBuyWater(...items) {
  return ["water", ...items];
}

console.log(alwaysBuyWater("milk", "apple"));
