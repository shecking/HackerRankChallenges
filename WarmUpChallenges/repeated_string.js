// THIS PROBLEM IS COMPLETED

/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
For example, if the string s = 'abcac' and n = 10, the substring we consider is abcacabcac, the first ten characters of her infinite string. There are 4 occurences of a in the substring.

Complete the repeatedString function. It should return an integer representing the nunmber of occurrences of a in the prefix of length n in the infinitely repeating string.

repeatedString has the following parameters:
s: a string to repeat
n: the number of characters to consider

Input:
The first line contains a single string, s.
The second line contains an integer, n.
Sample Input:
aba
10

Output:
Print a single integer denoting the number of letter a's in the first n letters of the infinite string created by repeating s infinitely many times.
Sample Output:
7

Explanation:
The first 10 (n) letters are abaabaabaa. There are 7 a's, so we print 7 on a new line.
*/

// general function to find number of characters in a string
String.prototype.countCharacters = function(char) {
  return [...this].filter(c => c === char).length
}
// console.log('ababaabba'.countCharacters('a')) // returns 5

function repeatedString(s, n) {
  // Declare variable for length of s
  const len = s.length
  // Find the number of times len needs to be repeated to reach length n, rounded up
  const repeatsNeeded = Math.ceil(n / len)
  // Find number of characters (including extras)
  const charsNeeded = repeatsNeeded * len
  // Find exact number of extra characters in the last repeat
  const charsInFinalRepeat = len - (charsNeeded % n)
  // finding how many characters 'a' are in string s (NOT overall count)
  const originalStringAs = s.countCharacters('a')
  // account for any additional partial strings (extraChars)
  const extraChars = s.slice(0, charsInFinalRepeat).countCharacters('a')

  // find characters up to but not including the last repeat, then add extras
  return originalStringAs * (repeatsNeeded - 1) + extraChars
}

console.log(repeatedString('aba', 10))
