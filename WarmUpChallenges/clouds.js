// THIS PROBLEM IS COMPLETED

/*
Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example, c = [0, 1, 0, 0, 0, 1, 0] indexed from 0 ... 6. The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. She could follow the following two paths: 0, 2, 4, 6 or 0, 2, 3, 4, 6. The first path takes 3 jumps while the second takes 4.
*/

// jumpingOnClouds has the following parameter(s):
// c: an array of binary integers

// Input format: The first line contains an integer n, the total number of clouds. The second line contains n space-separated binary integers describing clouds c[i] where 0 <= i <= n.
// Output format: Print the minimum number of jumps needed to win the game.

// Sample input 1:
// 7
// 0 0 1 0 0 1 0
//
// Sample output 1:
// 4 (0 -> 1 -> 3 -> 4 -> 6)
//
// Explanation 1:
// Emma must avoid c[2] and c[5]. She can win the game with a minimum of 4 jumps:

// Sample input 2:
// 6
// 0 0 0 0 1 0
// Sample output 2:
// 3 (0 -> 2 -> 3 -> 5)
//
// Explanation 2:
// The only thundercloud to avoid is c[4]. Emma can win the game in 3 jumps.

// Constraints:
/*
2 <= n <= 100
c[i] has a minimum value of {0, 1}
c[0] = c[n-1] = 0
*/

function jumpingOnClouds(c) {
  // Can jump forward by either 1 index or 2 indeces
  // Find the shortest path to the end
  // Use Sample Input 1
  // integer n = 7
  let n = c.length
  // array c = [0, 0, 1, 0, 0, 1, 0], with length of n
    // Note: not input as array c on hackerrank
  // Pseudocode:
  // Start at beginning, declare moves variable to hold number of moves
  let moves = 0
  let goForward

  // Be sure to start from new index c[i], found by the result of the last jump
  for (let i = 0; i < n; i += goForward) {
    // If possible to move forward two, do so
    if (c[i + 2] === 0) {
      goForward = 2
      // Add one to moves
      moves = moves + 1
      // console.log('double move')
    // If not, move forward one (always possible to complete)
    } else if (c[i + 1] === 0) {
      goForward = 1
      // Add one to moves
      moves = moves + 1
      // console.log('single move')
    // Once i = n - 1 (i < n), done
    } else if (i == n - 1) {
      console.log('Completed')
    } else {
      // should never encounter this
      console.log('Impossible to complete')
    }
  }
  // Print number of moves as integer
  console.log('Total moves: ', moves)

}
jumpingOnClouds([0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0])
