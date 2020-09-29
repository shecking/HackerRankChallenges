/*
Consider an array of integers, arr = arr[0], arr[1],...arr[n - 1]. We define the absolute difference between two elements, a[i] and a[j] (where i =/= j) to be the absolute value of a[i]-a[j].

Given an array of integers, find and print the minimum absolute difference (MAD) between any two elements in the array. For example, given the array arr = [-2, 2, 4], we can create 3 pairs of numbers: [-2, 2], [-2, 4], and [2, 4]. The absolute differences for these pairs are 4, 6, and 2, respectively; therefore, the MAD is 2.

Complete the minimumAbsoluteDifference function. It should return an integer that represents the minimum absolute difference between any pair of elements.
It has the following parameters:
n, an integer that represents the length of arr
arr, an array of integers

Constraints:
2 <= <= 10^5
-10^9 <= arr[i] <= 10^9

Input:
10
-59 -36 -13 1 -53 -92 -2 -96 -54 75

Output:
1

Explanation:
MAD is |-54 - -53 | = 1
*/

function minimumAbsoluteDifference(arr) {
  // sort array from smallest to largest
  var sortedArr = arr.sort((a, b) => a - b)
  var overallMad = Infinity
  for (let i = 1; i < sortedArr.length; i ++) {
    let oneMad = Math.abs(sortedArr[i - 1] - sortedArr[i])
    if (oneMad <= overallMad) {
      overallMad = oneMad
    }
  }
  console.log(overallMad)
  return overallMad
}

minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]) // 1
