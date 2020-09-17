// THIS PROBLEM IS COMPLETED

/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same number of times. Given a string s, determine if it is valid. If so return YES, otherwise return NO.

For example, if s = abc, it is a valid string. So is abcc, because we can remove one c and have 1 of each character in the remaining string. If s = abccc, the string is not valid as we can only remove 1 occurence of c.

Complete the isValid function. It should return either the string YES or the string NO.
isValid has the following parameters:
s: a string

Constraints:
1 <= s <= 10**5
Each character is in the ASCII alphabet, [a-z]

Input: A single string s
Sample Input: aabbcd

Output: Print YES or NO
Sample Output: NO
*/

function isValid(s) {
  // Split string apart, sort into alphabetical order
  const inOrder = s.split('')
  // Create empty dictionary
  let dict = {}
  /* Populate dictionary with keys (letters) and values (number of times the letter appears in the string), adding to a key's value for each repeated letter */
  for (let i = 0; i < inOrder.length; i ++) {
    // If it exists, add 1 to the value
    if (inOrder[i] in dict) {
      dict[inOrder[i]] ++
    // If it doesn't exist, create it with a value of 1 (first time it's shown up)
    } else {
      dict[inOrder[i]] = 1
    }
  }
  // console.log('Dictionary: ', dict)

  // Grab values from dictionary
  const dictValues = Object.values(dict)
  // Check for validity of string
  function allTheSame(array) {
    var first = array[0]
    return array.every(function(element) {
      return element === first
    })
  }

  if (allTheSame(dictValues)) {
    // if allTheSame, print YES
    return 'YES'
    // if any value is different, check for validity with one deletion
  } else {
    // loop through values array
    for (let k = 0; k < dictValues.length; k ++) {
      dictValues[k] = dictValues[k] - 1
      // if value reduced to 0, splice value and check
      if (dictValues[k] == 0) {
        dictValues.splice(k, 1)
        // if allTheSame, print YES
        if (allTheSame(dictValues)) {
          return 'YES'
        // if not all the same, add value back in and continue
        } else {
          dictValues.splice(k, 0, 1)
          continue
        }
      // if k != 0, and allTheSame, print YES
      } else if (allTheSame(dictValues)) {
        return 'YES'
      // if not all the same, continue loop to next index of dictValues
      } else {
        dictValues[k] = dictValues[k] + 1
        continue
      }
    }
    // string could not be validated, print NO
    return 'NO'
  }
}

console.log(isValid('abcdefghhgfedecba')) // should return YES
console.log(isValid('abcdefghhgfedeecba')) // should return NO
console.log(isValid('aabbc')) // should return YES
