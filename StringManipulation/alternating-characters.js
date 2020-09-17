// THIS PROBLEM IS COMPLETED

/* You are given a string containing characters A and B only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string. Find the minimum number of required deletions.

For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s = ABAB in 2 deletions.


Complete the alternatingCharacters function below. It must return an integer representing the minimum number of deletions to make the alternating string.
alternatingCharacters has the following parameter:
s: a string

Constraints:
1 <= q <= 10
1 <= s <= 10^5
Each string s will consists only of the characters A and B.

Input:
The first line contains an integer q, the number of queries.
The next q lines each contain a string s.
Sample Input:
5
AAAA
BBBBB
ABABABAB
BABABA
AAABBB

Output:
For each query, print the minimum number of deletions required on a new line.
Sample Output:
3
4
0
0
4
*/

function alternatingCharacters(s) {
  let count = 0
  for (let i = 1; i < s.length; i ++) {
    if (s[i] == s[i - 1]) {
      count = count + 1
    } else {
      continue
    }
  }
  return count
}

alternatingCharacters('ABAABBAB')
