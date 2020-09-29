// THIS PROBLEM IS COMPLETE*
// INCLUDES FIRST PASS AND REFACTORED SOLUTION

/*
Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array elements between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

Complete the function arrayManipulation. It has the following parameters:
int n - the number of elements in the array
int queries[q][3] - a two dimensional array of queries where each queries[i] contains three integers: a, b, and k

Input:
The first line contains two space separated integers n and m, the size of the array and the number of operations.
Each of the next m lines contains three space separated integers a, b, and k, the left index, right index, and summand.

Constraints:
3 <= n <= 10^7 (max array size)
1 <= m <= 2*10^5 (max number of operations)
1 <= a <= b <= n (a must be smaller than or equal to b, b must be smaller than or equal to the array size)
0 <= k <= 10^9 (max number to add to array elements)

Sample:
  Input:
  5 3 // 5 is the array size, 3 is the number of operations ('updates').
  1 2 100
  2 5 100
  3 4 100
  Output:
  200
Explanation:
After update 1, the list is 100 100   0   0   0.
After update 2, the list is 100 200 100 100 100.
After update 3, the list is 100 200 200 200 200.
Max value is 200.
*/

// THIS WORKS BUT TAKES TOO LONG
function arrayManipulationTooLong(n, queries) {
  // n is the size of the array
  // queries is an array of arrays, each containing a value for a, b, and k
  // Step 1: initialize/create array of 0s
  let arr = new Array(n).fill(0)
  // Step 2: loop through queries
  let query
  for (query of queries) {
    let currentNum = query[0]
    while (currentNum <= query[1]) {
      arr[currentNum - 1] = arr[currentNum - 1] + query[2]
      currentNum ++
    }
  }
  // console.log(arr)
  let maxValue = 0
  for (num of arr) {
    if (num > maxValue) {
      maxValue = num
    }
  }
  // console.log(maxValue)
}

arrayManipulationTooLong(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])

//
//////////////////// refactored solution below \\\\\\\\\\\\\\\\\\\\
//

function arrayManipulation(n, queries) {
  // create an array of size n + 1 (accomodating for index calculations, arr[0] will remain empty)
  const arr = new Array(n + 1)
  // declare maxValue and currentNumber for later use/iteration
  let maxValue = 0
  let currentNumber = 0
  // Loop over array and assign an object
  // What exactly is happening in this forEach loop?
  queries.forEach(([startRange, endRange, value]) => {
    // If object exists, set it equal to itself (why?)
    // If it doesn't, set object to { start: 0, end: 0 }
    arr[startRange] = arr[startRange] || { start: 0, end: 0 }
    arr[endRange] = arr[endRange] || { start: 0, end: 0 }
    arr[startRange].start += value
    arr[endRange].end += value
    // console.log(arr)
  })
  // console.log('Final arr: ', arr)
  // Find the maximum value in the array
  arr.forEach((cell) => {
    if (cell) {
      currentNumber += cell.start
      if (currentNumber > maxValue) {
        maxValue = currentNumber
      }
      currentNumber -= cell.end
    }
  })
  // return maxValue
  console.log(maxValue)
}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])
