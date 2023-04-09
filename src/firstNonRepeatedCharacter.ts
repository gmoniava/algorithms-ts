// Write a function that takes in a string and returns the first non-repeated character in the string.
// If all characters are repeated, the function should return null.
// Input
//  "aabbcde"
// Output
//  "c"
let firstNonRepeatedCharacter = (str: string) => {
  let letters: Record<string, number | null> = {};

  // Let's just keep track of letters which we encountered only once
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (letters[current] === undefined) letters[current] = i;
    else {
      // Encountered more than once, not interested anymore
      letters[current] = null;
    }
  }
  let min: number;
  let result = null;

  // Now we have letters which occured once, we need to select the one which was earliest in the string,
  // for that we need to look at the indexes we stored before
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
