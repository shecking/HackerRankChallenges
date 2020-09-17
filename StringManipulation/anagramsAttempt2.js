// THIS PROBLEM IS COMPLETE* (not solved by me, solved by the internet)

// Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

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

// See this address for these solutions:
// https://codereview.stackexchange.com/questions/165327/hackerrank-strings-making-anagrams-javascript-solution/165409

// LONG VERSION

function makeAnagramLongVersion(a, b) {

  // Creating object with {"k": 5, "a": 2, "b": 1} for example
  var objA = countAlphabetFrequency(a);
  var objB = countAlphabetFrequency(b);

  var numOfDeletionsA = countNumberOfDeletions(objA,objB);
  var numOfDeletionsB = countNumberOfDeletions(objB,objA);

  console.log(numOfDeletionsA + numOfDeletionsB);
}

function countAlphabetFrequency (arrOfAlphabets){
    var resultObj = {}

    for (i = 0; i < arrOfAlphabets.length; i++) {
        if (resultObj[arrOfAlphabets[i]]) {
          resultObj[arrOfAlphabets[i]] += 1;
        } else {
          resultObj[arrOfAlphabets[i]] = 1;
        }
    }
    return resultObj;
}

function countNumberOfDeletions (mainObj, referenceObj){
    var numOfDeletions = 0;

    for (var k in mainObj) {
        if (mainObj.hasOwnProperty(k)) {
          if (mainObj[k] && referenceObj[k]) {
            // Alphabet k exists in both strings
            if (mainObj[k] > referenceObj[k]) {
              // Main string has more k than in reference string
              numOfDeletions += mainObj[k] - referenceObj[k];
              mainObj[k] = referenceObj[k];
            }
          } else {
            // Alphabet k only exists in Main string
            numOfDeletions += mainObj[k];
          }
        }
    }

    return numOfDeletions
}

// SUPER SHORT VERSION
function makeAnagramShortVersion(a, b) {
  // declare an empty dictionary
  let freqs = {}
  // 1. Split string(s) into array(s) of characters with split() method
  // 2. For each character (char) in array a, array b separately:
    // 2a. Take in the char as an argument to give to the fat arrow function
    // 2b. Set a key equal to freqs[char] (all keys will be letters)
    // 2c. Set that key's value to freqs[char] + 1 OR 0 + 1 (all values will be numbers)
  // forEach syntax:
  //      arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
  const arrayA = a.split('').forEach(char => freqs[char] = (freqs[char] || 0) + 1) // increase
  const arrayB = b.split('').forEach(char => freqs[char] = (freqs[char] || 0) - 1) // decrease
  // freqs is now an array of all char frequencies (some positive some negative)
  // In other words, it represents how far away the total count of letters is from being able to create identical sets of letters (anagrams)
  // console.log(freqs) // this returns an array of keys (letters) and values (frequencies)

  // reduce syntax:
  //       arr.reduce(callback (accumulator,
  //                                         currentValue           [, index[, array]] )
  //                                                                            [, initialValue])
  const charsToDelete = Object.keys(freqs).reduce((sum, key) => sum + Math.abs(freqs[key]), 0)
  // this looks very complicated but all it's doing is adding a bunch of numbers

  // return charsToDelete
  console.log(charsToDelete)
  // (sum, key) => sum + Math.abs(freqs[key]) is the collective callback function
  // sum is the accumulator; holds the values thrown by the callback
  // key is the currentValue; iterating through keys, each key is a new element being processed (opt.)
  // freqs[key] is the index of the element being processed, starts from initialValue (opt.)
  // no 'array' value (opt.)
  // 0 is the initialValue; this is the index where reduce will start (opt.)

  // reduce does the following:
  // 1. Takes in the keys of the freqs object (an array)
    // These keys will be lost (reduced)
  // 2. reduce takes in arguments
    // 2a. sum starts at 0 (initialValue)
    // 2b. key is the element being processed in each loop (currentValue), taken from Object.keys(freqs)
  // 3. reduce adds the sum and the absolute value of the key's value
  // 4. reduce moves to the next element
  // 5. Steps 3 and 4 are repeated until there are no more values
  // 6. Returns an integer, the number of characters to be deleted
}

// makeAnagramLongVersion('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')

makeAnagramShortVersion('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')
