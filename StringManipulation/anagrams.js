// THIS PROBLEM IS INCOMPLETE

// Alice is taking a cryptography class ad finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Find the number.

/* Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make the two strings anagrams. Any characters can be deleted from either of the two strings.

For example, if a = cde and b = dcf, we can delete e from string and f from string b so that both remaining strings are cd and dc, which are anagrams. */

/* Function Description:
Complete the makeAnagram function. It must return an integer representing the minimum total characters that must be deleted to make the strings anagrams.
makeAnagram has the following parameters:
a: a string
b: a string

Input:
The first line contains a single string, a. The second line contains a single string, b.
Sample Input:
cde
abc

Output:
Print a single integer denoting the number of characters you must delete to make the two strings anagrams from each other.
Sample Output:
4

Explanation:
Remove d, e from cde to get c. Remove a and b from abc to get c. (4 deletions total)
*/

function makeAnagram(a, b) {
  // create an array of all characters
  const bigString = a.concat(b).split('').sort()
  // console.log(bigString)
  // Declare delete to track number of deletions
  let charsToDelete = 0
  // Declare count to track even or odd number of characters
  let currentLetterCount = 0
  // Declare current Letter for comparison
  let currentLetter = ''
  // Loop through array
  for (let i = 0; i < bigString.length; i ++) {
    // If characters are equal, add one to character count
    if (currentLetter == bigString[i]) {
      // console.log('Current letter ', currentLetter, ' == bigString[i] ', bigString[i])
      currentLetterCount = 1
      // console.log('New current letter: ', currentLetter, ' Count: ', currentLetterCount)
    } else {
      // console.log('Current letter ', currentLetter, ' != bigString[i] ', bigString[i])
      // If currentLetterCount is odd
      if (currentLetterCount == 0) {
        currentLetterCount = currentLetterCount + 1
        currentLetter = bigString[i]
      } else if (currentLetterCount % 2 != 0) {
        // console.log('Current letter: ', currentLetter, ' count is odd (', currentLetterCount, ')')
        // Add 1 to charsToDelete
        charsToDelete = charsToDelete + 1
        // set currentLetterCount to 1
        currentLetterCount = 0
        currentLetter = bigString[i]
      // If count is even
      } else {
        // console.log('Current letter: ', currentLetter, ' count is even (', currentLetterCount, ')')
        currentLetterCount = (currentLetterCount/currentLetterCount) + 1
        currentLetter = bigString[i]
      }
    }
  }
  // console.log('Characters to delete: ', charsToDelete)
  return charsToDelete
}

makeAnagram('gcdfe', 'eacbd')
