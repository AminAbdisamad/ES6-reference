// Old way of looping

const colors = ["blue", "red", "green"];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Looping through filter

// Old way of mapping elemenets
const numbers = [1, 2, 3, 4];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// Using Array.prototype.Map
const doubled = numbers.map(number => number * 2);

// Users

const users = [
  {
    user: "Hassan",
    country: "Somalia"
  },
  {
    user: "Josh",
    country: "UK"
  },
  {
    user: "Mahir",
    country: "KSA"
  },
  {
    user: "Maison",
    country: "Spain"
  }
];
const country = users.map(user => user.country);
