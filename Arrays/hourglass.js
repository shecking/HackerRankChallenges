// THIS PROBLEM IS COMPLETED

/*
Given a 6 x 6 2D array, arr:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

We define an hourglass in A to be a subset of values with indices falling in this patterns in arr's graphical representation:
a b c
  d
e f g

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass's values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

Example:
Given the 2D array,
-9 -9 -9  1 1 1
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
we calculate the following hourglass values:
-63, -34, -9, 12,
-10,   0, 28, 23,
-27, -11, -2, 10,
  9,  17, 25, 18
The highest hourglass value is 28 from the following hourglass:
0 4 3
  1
8 6 6

Complete the function hourglassSum. It should return an integer, the maximum hourglass sum in the array, with arr having the following parameters:
arr, an array of integers

Input Example:
Each of the 6 lines of inputs arr[i] contain 6 space-separated integers arr[i][j]:
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0

Output Example:
Print the largest (maximum) hourglass sum found in arr.
19

(2 4 4
   2
 1 2 4)
*/

function hourglassSum(arr) {
  // Create an array to hold hourglass sums
  const sumArray = []
  // How to represent an hourglass in code

  let array2DHeight = 6 // used to determine looping
  let array2DWidth = 6 // used to determine looping

  // outer array iteration, 6 arrays
  for (let i = 0; i < arr.length; i ++) {
    // skipping 5th and 6th arrays, no more arrays to create hourglasses with
    if (i == array2DHeight - 2 || i == array2DHeight - 1) {
      continue
    }
    // inner array iteration, 6 items
    for (let j = 0; j < arr[i].length; j ++) {
      // skipping 5th and 6th values, no more values to create proper hourglass
      if (j == array2DWidth - 2 || j == array2DWidth - 1) {
          continue
      }
      // Sum an hourglass
      // Loop through all hourglasses
      let hourglass = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
      // Push value of each hourglass to storage array
      sumArray.push(hourglass)
    }
  }
  // console.log(sumArray)
  let biggestNumber = sumArray[0]
  // Loop through to find the biggest hourglass sum
  for (let k = 0; k < sumArray.length; k ++) {
    if (sumArray[k] > biggestNumber) {
      biggestNumber = sumArray[k]
    }
  }
  // return biggestNumber
  console.log(biggestNumber)
}
// this returns 28
hourglassSum([[-9, -9, -9,  1, 1, 1],
              [ 0, -9,  0,  4, 3, 2],
              [-9, -9, -9,  1, 2, 3],
              [ 0,  0,  8,  6, 6, 0],
              [ 0,  0,  0, -2, 0, 0],
              [ 0,  0,  1,  2, 4, 0]])

// this returns 19
// hourglassSum([[1, 1, 1, 0, 0, 0],
//               [0, 1, 0, 0, 0, 0],
//               [1, 1, 1, 0, 0, 0],
//               [0, 0, 2, 4, 4, 0],
//               [0, 0, 0, 2, 0, 0],
//               [0, 0, 1, 2, 4, 0]])
