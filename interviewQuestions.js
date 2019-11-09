function reverseWithBuiltin(string) {
  return string
    .split("")
    .reverse()
    .join("");
}

console.log(reverseWithBuiltin("Hassan"));

const reversedWithLoop = string => {
  let reversed = "";
  for (let char of string) {
    reversed = char + reversed;
  }
  return reversed;
};

reversedWithLoop("Hassan");

function palindrome(string) {
  let reversed = "";
  for (const char of string) {
    reversed = char + reversed;
  }
  return reversed === string;
}
// const palindrome = (string) =>{
//     return string.split("").reverse().join("") === string
// }

console.log(palindrome("mom"));

function reverseInt(int) {
  reversedNumber = int
    .toString()
    .split("")
    .reverse()
    .join("");
  const number = parseInt(reversedNumber);
  if (int < 0) {
    return number * -1;
  }
  return number;
}

reverseInt(-10009);

// Return max character

function maxChar(string) {
  const charactersMap = {};
  let counter = 0;
  let maxChar = "";
  for (const char of string) {
    if (!charactersMap[char]) {
      charactersMap[char] = 1;
    } else {
      charactersMap[char]++;
    }
  }

  for (const key in charactersMap) {
    if (charactersMap[key] > counter) {
      counter = charactersMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar("Hello There!"));
