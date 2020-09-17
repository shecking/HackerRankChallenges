// THIS PROBLEM IS COMPLETE

/*
Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
  for (int j = 0; j < n - 1; j++) {
    // Swap adjacent elements if they are in decreasing order
    if (a[j] > a[j + 1]) {
      swap(a[j], a[j + 1])
    }
  }
}

Given an array of integers sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:
1. 'Array is sorted in numSwaps swaps.'
    where numSwaps is the number of swaps that took place.
2. 'First Element: firstElement'
    where firstElement is the first element in the sorted array.
3. 'Last Element: lastElement'
    where lastElement is the last element in the sorted array.

    HINT: To complete this, you must add a variable that keeps a running tally of all swaps that occur during execution. For example, give a worst-case but small array to sort - a = [6, 4, 1], we go through the following, taking 3 steps to sort the array:
      swap | a
      0    | [6, 4, 1]
      1    | [4, 6, 1]
      2    | [4, 1, 6]
      3    | [1, 4, 6]
    Output:
      Array is sorted in 3 steps.
      First Element: 1
      Last Element: 6

Function: Complete the function countSwaps. It should print the three lines required, then return.
countSwaps has the following parameters:
  a: an array of integers

Input:
The first line contains an integer, n, the size of array a.
The second line contains n space separated integers a[i].
Sample Input:
  3
  3 2 1

Output:
You must print the three lines in the format listed above.
Sample Output:
  Array is sorted in 3 swaps.
  First Element: 1
  Last Element: 3
*/


function countSwaps(a) {
  let numSwaps = 0
  let firstElement = 0
  let lastElement = 0
  const n = a.length

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {

      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        var temp = a[j + 1]
        a[j + 1] = a[j]
        a[j] = temp
        // Tally the swap
        numSwaps = numSwaps + 1
      }
    }
  }
  firstElement = a[0]
  lastElement = a[n - 1]
  console.log(`Array is sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${firstElement}`)
  console.log(`Last Element: ${lastElement}`)
  return
}

countSwaps([1, 6, 5, 3, 4, 2])
