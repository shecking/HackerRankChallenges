/*
Given an array of integers and a target value, determine the number of pairs of array elements that have a difference equal to a target value.
For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: 2 - 1 = 1, 3 - 2 = 1, and 4 - 3 = 1.

Complete the pairs function. It must return an integer representing the number of element pairs having the required difference.
pairs has the following parameters:
k, an integer, the target difference
arr, an array of integers

Constraints:
2 <= n <= 10^5
0 < k < 10^9
0 < arr[i] < 2^31 - 1
Each integer arr[i] will be unique.

Input:
The first line contains two space-separated integers n and k; the size of arr, the target value.
The second line contains n space-separated integers of the array arr.

Output:
An integer representing the number of pairs of integers whose difference is k.

Sample:
5 2         // n = 5, k = 2
1 5 3 4 2   // arr values

3           // output is 3; [5, 3], [4, 2], [3, 1]
*/

// THIS WORKS, BUT TAKES TOO LONG
function pairsTooLong(k, arr) {
  // declare count to track number of pairs
  let count = 0
  // loop to get through values, omitting last value (no comparison)
  for (let i = 0; i < arr.length - 1; i ++) {
    // loop to compare, j determined by value of i
    for (let j = i + 1; j < arr.length; j ++) {
      let diff = Math.abs(arr[i] - arr[j])

      if (diff == k) {
        count = count + 1
      }
    }
  }
  // return count
  // (or)
  console.log('Final count: ', count)
}

// pairsTooLong(2, [1, 3, 5, 8, 6, 4, 2])
// expected outcome is 5  ([1, 3], [3, 5], [8, 6], [6, 4], [4, 2] )

function pairs(k, arr) {
  // Write a new function that doesn't use nested for loops
  const sortedArr = arr.sort((a, b) => a - b)

  // track each number in an object
  // unnecessary if-else logic if we know the numbers in sortedArr are all unique?
  const numElems = sortedArr.reduce((obj, item) => {
    obj[item] = 1
    return obj
  }, {})
  // console.log(numElems)

  // declare count to track numbers of pairs
  let count = 0
  // create an array of existing keys
  const keys = Object.keys(numElems)

  for (let i = 0; i < keys.length; i++) {
    let target = parseInt(keys[i]) + k
    if (numElems.hasOwnProperty(target)) {
      count ++
      // remove key to only count distinct pairs (no repeats of same pair)
      // e.g. finding combinations, not permutations
      delete numElems[keys[i]]
    }
  }
  return count
  // console.log(count)
}

pairs(2, [1, 3, 5, 8, 6, 4, 2])

// Example of binary search

// const binarySearch = (array, target) => {
//   let startIndex = 0
//   let endIndex = array.length - 1
//
//   while (startIndex <= endIndex) {
//     let middleIndex = Math.floor((startIndex + endIndex) / 2)
//
//     if (target === array[middleIndex]) {
//       console.log('Target was found at index ', middleIndex)
//       count = count + 1
//       return
//     }
//
//     if (target > array[middleIndex]) {
//       console.log('searching the right side')
//       startIndex = middleIndex + 1
//     }
//
//     if (target < array[middleIndex]) {
//       console.log('searching the left side')
//       endIndex = middleIndex - 1
//     }
//
//     else {
//       console.log('Target not found in this iteration')
//     }
//   }
// }
