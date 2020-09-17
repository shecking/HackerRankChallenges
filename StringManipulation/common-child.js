// THIS PROBLEM IS COMPLETED (with help)
// See https://www.youtube.com/watch?v=ASoaQq66foQ
// Also see https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sets/longest-common-subsequence/longestCommonSubsequence.js

/* This problem is a rewording of the longest common subsequence problem, using dynamic programming.
Pseudocode (trying to find the best path to take):
lcs('aab', 'azb')
  Look at LAST character, which is the same
  The "subproblem" now is 1 + lcs('aa', 'az')
    Look at LAST character again
    Subproblem is now what is the max between lcs('a', 'az') and lcs('aa', 'a')
*/

/*
A string is said to be a child of another string if it can be formed by deleting 0 or more characters from the other string. Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?

For example, ABCD and ABDC have two children with maximum length 3, ABC and ABD. They can be formed by eliminating either the D or C from both strings. Note that we will not consider ABCD as a common child because we can't rearrange characters and ABCD =/= ABDC.

Complete the commonChild function. It should return the longest string which is a common child of the input strings.
commonChild has the following parameters:
s1, s2: two equal length strings

Constraints:
  1 <= s1, s2 <= 5000
  All characters are upper case in the range ascii[A-Z].

Example:
SHINCHAN
NOHARAAA
Output: 3
The longest string that can be formed between the two strings while maintaining the order is NHA (length of 3).
*/

function commonChild(s1, s2) {
  // Create array (matrix) full of nulls to hold values of LCS table
  const lcsMatrix = Array(s2.length + 1).fill(null).map(() => Array(s1.length + 1).fill(null))

  // Fill first row and column with zeros (representing empty string comparison, will ALWAYS be 0)
  for (let columnIndex = 0; columnIndex <= s1.length; columnIndex ++) {
    lcsMatrix[0][columnIndex] = 0
  }
  for (let rowIndex = 0; rowIndex <= s2.length; rowIndex ++) {
    lcsMatrix[rowIndex][0] = 0
  }
  // moving down 1 row on each iteration, starting at index 1
  for (let rowIndex = 1; rowIndex <= s2.length; rowIndex ++) {
    // moving right 1 column on each iteration, starting at index 1
    for (let columnIndex = 1; columnIndex <= s1.length; columnIndex ++) {
      // if there is a match (subproblems both yield the same answer):
      if (s1[columnIndex - 1] === s2[rowIndex - 1]) {
        // add 1 to the value at lcsMatrix[rowIndex][columnIndex]
        // e.g. the characters match, the substrings share this letter
        lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1
      // if there is NOT a match (subproblems yield different answers):
      } else {
        // Pit the two values against each other, choose the larger one
        // e.g. the characters do not match, the substrings do not share this letter
        lcsMatrix[rowIndex][columnIndex] = Math.max(
          lcsMatrix[rowIndex - 1][columnIndex],
          lcsMatrix[rowIndex][columnIndex - 1]
        )
      }
    }
  }
  // return lcsMatrix[s2.length][s1.length]
  console.log(lcsMatrix[s2.length][s1.length])
}

commonChild('ABCDEF', 'GHIJKL')
