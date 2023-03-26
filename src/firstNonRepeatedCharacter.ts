// Write a function that takes in a string and returns the first non-repeated character in the string.
// If all characters are repeated, the function should return null.
// Input
//  "aabbcde"
// Output
//  "c"
let firstNonRepeatedCharacter = (str: string) => {
  let letters: Record<string, number | null> = {};
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (letters[current] === undefined) letters[current] = i;
    else {
      // No need to keep track of letters which occured more than once
      letters[current] = null;
    }
  }
  let min: number;
  let result = null;
  // We have letters which occured once, find the one which was first in the string
  Object.entries(letters)
    .filter((x): x is [string, number] => x[1] !== null)
    .forEach(([k, v]) => {
      if (min === undefined) {
        min = v;
        result = k;
      } else if (v < min) {
        min = v;
        result = k;
      }
    });
  return result;
};

export default firstNonRepeatedCharacter;
