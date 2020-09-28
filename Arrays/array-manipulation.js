// THIS PROBLEM IS SEMI-COMPLETE
// Failed ~half of tests due to time limit

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

function arrayManipulation(n, queries) {
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
  console.log(maxValue)
}

arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])
