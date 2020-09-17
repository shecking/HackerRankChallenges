// THIS PROBLEM IS COMPLETED

/*
Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U, or a downhill, D, step. Gary's hikes start and end at sea level and each step up of down represents a 1 unit change in altitude.

We define the following:
-- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
-- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Give Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through. For example, if Gary's path is s = [DDUUUUDD], he first enters a valley 2 units deep, then climbs out and up onto a mountain 2 units high, and finally returns to sea level and ends the hike.

Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.
countingValleys has the following parameters:
-- n, the number of steps Gary takes
-- s, a string describing his path

Input:
The first line contains an integer n (number of steps in hike).
The second line contains a single string s, of n characters that describe his path.

Output:
Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input:
8
UDDDUDUU

Sample Output:
1

Explanation: Gary enters and leaves one valley (represented with DDUDUU, ending at sea level)

Constraints:
2 <= n <= 1000000 (1 million)
s[i] = {UD} (minimum hike)
*/

function countingValleys(n, s) {
  // Pseudocode:
  // Separate string into array with split method
  const hike = s.split("")
  // Declare variable to keep track of valleys
  let valleys = 0
  let mountains = 0
  // Declare variable to keep track of Us and Ds
  let level = 0
  // Loop through hike array of Us and Ds
  for (let i = 0; i < n; i ++) {
    if (hike[i] == 'U') {
      level += 1
      if (level == 0) {
        valleys += 1
      }
    } else {
      level -= 1
      if (level == 0) {
        mountains += 1
      }
    }
  }
  // console.log('Number of valleys: ')
  console.log(valleys)
  // console.log('Number of mountains: ', mountains)
  // Now we have array of Us and Ds that we can iterate over
}

countingValleys(14, 'UDDDUDUUUUUDDD')
