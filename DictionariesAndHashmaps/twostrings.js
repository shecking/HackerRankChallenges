// THIS PROBLEM IS COMPLETE

/*
Given two strings, determine if they share a common substring.
A substring may be as small as one character.
For example, the words "a", "and", and "art" share the common substring a. The words "be" and "cat" do not.

Function Description:
Complete the function twoStrings.
It should return a string, either YES or NO based on whether the strings share a common substring.
twoStrings has the following parameters:
-- s1, s2: two strings to analyze

Input:
The first line contains a single integer p, the number of test cases.
The following p pairs of lines are as follows:
-- The first line contains string s1.
-- The second line contains string s2.

Output:
For each pair of strings, return YES or NO.

Constraints:
-- s1 and s2 consist of characters in the range [a-z] (ASCII characters).
-- 1 <= p <= 10
-- 1 <= |s1|, |s2| <= 10^5
*/


// Pseudocode:
  // Goal: determine if two strings contain any mutual substrings
  // Substrings can be as small as length of 1
  // Return a boolean YES or NO
  // Test s1 = 'hello', s2 = 'world'
    // Each word will be an object, contains key (length of substring) with multiple values (each substring of that length) as an array
    // split each word, populate keys and values
    // Loop through each character of word (length 1, 5 times), collect values in a dictionary
    // Loop through the values of each word, compare them to the values of the other word

// twoStrings('hello', 'world')

function twoStrings(s1, s2) {
  let match = 'NO'
  if (s1.length <= s2.length) {
    for (let i = 0; i < s2.length; i ++) {
      if (s1.includes(s2[i])) {
        match = 'YES'
        break
      }
    }
  } else {
    for (let j = 0; j < s1.length; j ++) {
      if (s2.includes(s1[j])) {
        match = 'YES'
        break
      }
    }
  }
  console.log(match)
  // return match
}
twoStrings('hello', 'world')
