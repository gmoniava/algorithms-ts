// Write a function that takes in a string and returns the first non-repeated character in the string.
// If all characters are repeated, the function should return null.
// Input
//  "aabbcde"
// Output
//  "c"
let firstNonRepeatedCharacter = (str: string) => {
  let lettersOccuringOnce: Record<string, boolean | null> = {};

  // Let's just keep track of letters which we encountered only once
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (lettersOccuringOnce[current] === undefined)
      lettersOccuringOnce[current] = true;
    else {
      // Encountered more than once, not interested anymore
      lettersOccuringOnce[current] = null;
    }
  }

  // We know which letters appeared only once, just grab the one which appears first in the string
  for (let j = 0; j < str.length; j++) {
    if (lettersOccuringOnce[str[j]]) return str[j];
  }
  return null;
};

export default firstNonRepeatedCharacter;
