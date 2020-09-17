// THIS PROBLEM IS COMPLETED

/*
A left rotation operation on an array shifts
each of the array's elements 1 unit to the left.
For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5],
the array becomes [3, 4, 5, 1, 2].

Given an array a of n integers and a number, d, perform d left roations on the array.
Return the updated array to be printed as a single line of space-separated integers.

Function:
Complete the function rotLeft. It should return the resulting array of integers.
rotLeft has the following parameters:
-- An array of integers, a
-- An integer d, the number of rotations

Constraints:
1 <= n <= 10^5
1 <= d <= n
1 <= a[i] <= 10^6

Input:
The first line contains two space separated integers n and d, the size of a and the number of left rotations you must perform.
The second line contains n space-separated integers a[i].
  Ex.
  5 4
  1 2 3 4 5

Output:
Print a single line of n space-separated integers denoting the final state of the array after performing d left rotations.
  Ex.
  5 1 2 3 4
*/

function rotLeft(a, d) {
  // Pseudocode
  // Declare variable n as length of array a
  let n = a.length
  let store
  for (let i = 0; i < d; i ++) {
    // Declare variable to hold the value to be shifted/pushed
    let store = a[0]
    // Remove item from beginning of array
    a.shift()
    // Add item to end of array
    a.push(store)
  }
  return a
  // console.log(a)
}

rotLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)
