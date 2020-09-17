// THIS PROBLEM IS INCOMPLETE

/*
People are in line for a roller coaster!
There are a number of people queued up,
and each person wears a sticker indicating their initial position in the queue.
Initial positions increment by 1, from 1 at the front of the line to n at the back.

Any person in the queue can bribe the person directly in front of them to swap positions.
If two people swap positions, they still wear the same sticker denoting their original places in line.
One person can bribe at most two others.
For example, if n = 8 and Person 5 bribes Person 4, the queue will look like this:
Starting: 1, 2, 3, 4, 5, 6, 7, 8
Ending:   1, 2, 3, 5, 4, 6, 7, 8

You want to know the minimum number of bribes that took place
to get the queue into its final state.

Complete the function minimumBribes.
It must print an integer representing the minimum number of bribes necessary,
or print 'Too chaotic' if the line configuration is not possible.
minimumBribes has the following parameters:
-- q, an array of integers

Input:
The first line contains an integer t, the number of test cases.
Each of the next t pairs of lines are as follows:
  The first line contains an integer t, the number of people in the queue
  The second line has n space-separated integers describing the final state of the queue.
  E.g. 2
       5
       2 1 5 3 4
       5
       2 5 1 3 4

Output:
Print an integer denoting the minimum number of bribes needed to get the queue into its final state.
Print 'Too chaotic' if the state is invalid (requiring a person to bribe more than 2 people).
E.g. 3            // The first case needed 3 swaps; Number 2 swapped once, Number 5 swapped twice
     Too chaotic  // The second case needed 4 swaps, BUT was too chaotic; Number 5 needed to swap 3 times

*/
// q is an array of integers representing the line at end??
function minimumBribes(queue) {
  // Option 1: prototype/this function
  Array.prototype.swapPlaces = function(x, y) {
    let placeholder = this[x]
    this[x] = this[y]
    this[y] = placeholder
    // console.log(this)
    // With i defined, call this function with:
    // q.swapPlaces(num1, num2), e.g. q.swapPlaces(i, i + 1)
    // Note: WILL NOT WORK if you try to call q.swapPlaces(q[i], q[i + 1])
  }
  // Option 2: destructuring function
  const swapPlaces = function(x, y) {
    [ queue[x], queue[y] ] = [ queue[y], queue[x] ]
    // Call this function with:
    // swapPlaces(num1, num2)
    // num1(x) and num2(y) are indeces in array q
  }
  // Starting with mixed array, working backwards
  // Construct a sorted array to use as reference
  let arrayInOrder = queue.sort()
  // Begin comparing mixed array to ordered array
  // While mixed array does not equal ordered array
  while (queue !== arrayInOrder) {
    for (let i = 0; i < arrayInOrder.length; i ++) {
      // Declare a counter to track number of swaps in a row (cannot be more than 2)
      let count = 0
      // Loop through values of array
      // If the values match, reset count
      if (arrayInOrder[i] === queue[i]) {
        count = 0
        // If the values do NOT match:
      } else {
        // if the count is 0 or less, add 1,
        if (count <= 1) {
          count ++
          queue.swapPlaces(i, i + 1)
          // MORE CODE HERE FOR SWAPPING
        } else {
          console.log('Too chaotic')
        }
      }
    }
  }
  console.log(queue)
}

minimumBribes([2, 1, 5, 3, 4])
