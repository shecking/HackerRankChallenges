// THIS PROBLEM IS COMPLETE
// INCLUDES FIRST PASS SOLUTION AND REFACTORED SOLUTION

/*
A bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to 2x the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

Given the number of trailing days d and a client's total daily expenditures for a period of n days, find and print the number of times the client will receive a notfication over all n days.

For example, d = 3 and expenditures = [10, 20, 30, 40, 50]. On the first three days, they just collect spending data. At day 4, we have trailing expenditures of [10, 20, 30]. The median is 20 and the day's expenditure is 40. Because 40 >= 2 * 20, there will be a notice. The next day, our trailing expenditures are [20, 30, 40] and the expenditures are 50. This is less than 2 + 30 so no notice will be sent. Over the period, there was one notice sent.

Median is found by arranging the numbers from smallest to largest, picking the middle (take average if there is an even number of numbers).

Complete the function activityNotifications. It must return an integer representing the total number of client notifications over a period of n days.

activityNotifications has the following parameters:
expenditure: an array of integers representing daily expenditures.
d: an integer, the lookback days for median spending

Constraints:
1 <= n <= 2 * 10^5 (total number of days)
1 <= d <= n (trailing/lookback days, d, will not exceed total number of days, n)
0 <= expenditure[i] <= 200 (no individual day of spending exceeds 200)

Sample Input:
9 5
2 3 4 2 3 6 8 4 5

Sample Output:
2

Explanation:
Determine the total number of notifications the client receives over n = 9 days.

Days 1-5: No notifications because the bank has insufficient data.
Day 6: The bank has 5 prior days of data, {2, 3, 4, 2, 3}, median 3. The client spends 6, triggering a notification (6 >= 2 * median). Total notifications: 1.
Day 7: 5 days, {3, 4, 2, 3, 6}, median 3. Client spends 8, +1 notification, total 2.
Day 8: 5 days, {4, 2, 3, 6, 8}, median 4. Client spends 4, no notification, total 2.
Day 9: 5 days, {2, 3, 6, 8, 4}, median 4. Client spends 5, no notification, total 2.
// return 2
*/

// expenditure is an array of daily expenditures, d is an integer of lookback days
function activityNotifications(expenditure, d) {
  let numberOfNotifications = 0
  // start at index d of array (item 6, d + 1) to capture prior d days of data
  // loop through expenditure array
  for (let i = d; i < expenditure.length; i ++) {
    const currentDaySpent = expenditure[i]
    let lookbackDays = []
    let neededDays = d
    // while number of lookback days in array is less than d days needed AND neededDays is greater than 0
    while (lookbackDays.length < d && neededDays > 0) {
      // push items to lookbackDays array based on i
      lookbackDays.push(expenditure[i - neededDays])
      neededDays --
    }
    // console.log('Lookback days: ', lookbackDays)
    // sort each array of days
    const sortedDays = lookbackDays.sort((a, b) => a - b)
    // define the midpoint of this array
    const midpoint = Math.ceil(sortedDays.length / 2)
    // find the median of this array
    const medianOfSortedDays = sortedDays.length % 2 == 0 ? (sortedDays[midpoint] + sortedDays[midpoint - 1]) / 2 : sortedDays[midpoint - 1]

    // if currentDaySpent is greater than 2 * median, add 1 to numberOfNotifications
    if (currentDaySpent >= (2 * medianOfSortedDays)) {
      numberOfNotifications ++
    }
  }
  // console.log(numberOfNotifications)
  return numberOfNotifications
}

// activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5) // expected to return 2


//////////////////// refactored solution below \\\\\\\\\\\\\\\\\\\\

// helper function to find 2xMedian value
function get2xMedian(countArr, d) {
  // counter to track sum
  let sum = 0
  // logic to determine the median, multiplied by 2
  for (let i = 0; i < countArr.length; i++) {
    sum += countArr[i]
    if ((sum * 2) == d) {
      return ((i * 2) + 1)
    }
    if ((sum * 2) > d) {
      return (i * 2)
    }
  }
}

function activityNotificationsRefactored(expenditure, d) {
  // creating a new array with 201 spots (based off of expenditure[i] constraint from above, and taking care of index 0), filling with 0s
  // this will hold data for sorting
  const countArr = new Array(201).fill(0)
  // counter for total notifications
  let numberOfNotifications = 0
  // Load up the countArr array with values to be handled by a "sliding window" and implementation of counting sort
  for (let i = 0; i < d; i++) {
    countArr[expenditure[i]]++
  }
  // Basic elements grabbed from above "solution" are the for loop (starting with i = d), median logic, the if statement regarding median * 2, and the final numberOfNotifications value

  for (let i = d; i < expenditure.length; i++) {
    const medianx2 = get2xMedian(countArr, d) // see above helper function
    // if money spent meets or exceeds median x 2
    if (expenditure[i] >= medianx2) {
      numberOfNotifications++
    }
    // stopping slide and sort function before the very end, unnecessary
    if (i == expenditure.length - 1) {
      break
    }
    // Counting sort logic goes in this loop
      // Decrease the value in countArr at the index equal to the first trailing day value
      // Increment the value in countArr at the index after the last trailing day
      // Visual:
      // loop 1: [ 0 0 0 ] 0 0 0
      // loop 2: 0 [ 0 0 0 ] 0 0
      // loop 3: 0 0 [ 0 0 0 ] 0 etc etc etc
    countArr[expenditure[i - d]]--
    countArr[expenditure[i]]++
    // console.log(countArr)
  }
  return numberOfNotifications
  // console.log(numberOfNotifications)
}

activityNotificationsRefactored([2, 3, 4, 2, 3, 6, 8, 4, 5], 5) // expected to return 2
