// Write a function that takes in a string as input and rearranges its letters
// to form a palindrome. If palindrome can't be created, empty string is returned.
// Otherwise should return the palindrome it created.

export default function generatePalindrome(s: string): string {
  let letters: Record<string, number> = {};

  // Count letter occurrences
  for (let i = 0; i < s.length; i++) {
    if (letters[s[i]] === undefined) {
      letters[s[i]] = 1;
    } else {
      letters[s[i]]++;
    }
  }

  // If more than one letter occurs odd number of times, we can't construct a palindrome
  let oddOccurrences = Object.values(letters).filter((x) => x % 2 === 1);
  if (oddOccurrences.length > 1) return "";

  // Find the letter which occurred odd number of times (if any)
  let oddOccurredLetter;
  Object.entries(letters).forEach(([k, v]) => {
    if (v % 2 === 1) {
      oddOccurredLetter = k;
      --letters[k];
    }
  });

  // Use that as start value of our palindrome
  let startValue = "";
  if (oddOccurredLetter) {
    startValue = oddOccurredLetter;
  }

  // Generate our palindrome
  let result: string = Object.entries(letters).reduce(
    (accumulator, current) => {
      let [letter, nrOfTimes] = current;
      for (let i = 0; i < nrOfTimes / 2; i++) {
        accumulator = letter + accumulator + letter;
      }
      return accumulator;
    },
    startValue
  );

  return result;
}
