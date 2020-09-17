// THIS PROBLEM IS COMPLETED

/*
In a computer security course, you just learned about password decryption. Your fellow student created their own encryption method, and they've asked you to test how secure it is. your task is to recover the original password given the encrypted password provided to you by the classmate.

At first, it seems impossible. One day after class, you catch a peek of your classmate's notebook where the encryption process is noted. You snap a quick picture, that looks like this:

Given string s, let s[i] represent the ith character in the string s,
using 0 based indexing.
  1. Initially i = 0
  2. If s[i] is lowercase and the next character s[i + 1] is uppercase, swap them, add a '*' after them, and move to i + 2.
  3. If s[i] is a number, replace it with 0, place the original number at the start, and move to i + 1.
  4. Else, move to i + 1.
  5. Stop if i is more than or equal to the string length. Otherwise, go to step 2.

Description:
Complete the function decryptPassword. decryptPassword must return the original password string before it was encrypted.
decryptPassword has the following parameter:
-- s, the password string after it was encrypted by your classmate

Constraints:
1 <= length of s <= 10^5
s can contain Latin alphabet characters (a-z, A-Z), numbers(0-9), and the character '*'.

Example:
Original string: 'hAck3rr4nk' (does not contain '0')
Encrypted string: '43Ah*ck0rr0nk'
  Pseudocode:

Example 2:
Decrypted string: 'aP1pL5e'
Encrypted string: '51Pa*0Lp0e'
Pseudocode to encrypt:
  Loop through string with i (i=0 to start)
  Start at beginning 'a', swap 'a' with 'P', add '*', move to i+2 (string is 'Pa*1pL5e')
  Replace '1' with '0', put '1' at the start, move to i+1 (string is '1Pa*0pL5e')
  Swap 'p' with 'L', add '*' move to i+2 (string is '1Pa*0Lp*5e')
  Replace '5' with '0', put '5' at the start, move to i+1 (string is '51Pa*0Lp*0e')
  'e' is at the end, can't swap, finish
Pseudocode to decrypt:
  Work backwards!
  Loop through each character of string in reverse
  If 0, replace with first character of string, remove first character from string
  If *, remove it, swap next two letters
  If letter alone, leave it
    (working backwards) If anything besides lowercase then uppercase, continue?
*/

function decryptPassword(s) {
  // get string in reverse to work 'backwards', use array
  const str = s.split("").reverse()
  // console.log(str) // yields ['e', '0', '*', 'p', 'L', '0', '*', 'a', 'P', '1', '5']
  // Loop through characters
  for (let i = 0; i < str.length; i ++) {
    // If 0, replace with last character of string, remove last character from string
    if (str[i] == '0') {
      str[i] = str[str.length - 1]
      str.pop()
      // console.log('Replaced 0, str is now: ', str)
    // If *, remove, swap next two letters
    } else if (str[i] == '*') {
      // let placeholder = str[i + 1]
      // str[i + 1] = str[i + 2]
      // str[i + 2] = placeholder
      [str[i + 1], str[i + 2]] = [str[i + 2], str[i + 1]]
      str.splice(i, 1)
      // console.log('Removed character *, str is now: ', str)
    }
  }
  let finalStr = str.reverse().join("")
  // console.log(finalStr)
  return finalStr
}

decryptPassword('51Pa*0Lp*0e')
// this should yield aP1pL5e
