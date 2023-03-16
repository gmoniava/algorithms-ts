// Question
// Write a function that takes in a string and returns the first non-repeated character in the string.
// If all characters are repeated, the function should return null.
// Input
//  "aabbcde"
// Output
//  "c"
let findFirstNonRepeatedCharacter = (str: string) => {
  let letters: Record<string, any> = {};
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (letters[current] === undefined) letters[current] = i;
    else {
      // If we encountered this letter second time, we don't need to keep track of it anymore
      letters[current] = null;
    }
  }
  let min: number;
  let result = null;
  // Now we have letters which we encountered once, find the one which occured earlier
  Object.entries(letters)
    .filter(([k, t]) => t !== null)
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

export default findFirstNonRepeatedCharacter;
