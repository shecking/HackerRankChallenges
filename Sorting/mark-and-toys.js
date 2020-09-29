// THIS PROBLEM IS COMPLETE

/*
Mark and Jane are very happy after having their first child. Child likes toys, Mark is buying some, and Mark wants to maximize the number of toys he can buy with a set amount of money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if prices = [1, 2, 3, 4] and Mark has k = 7 to spend, he can buy items [1, 2, 3] for 6, or [3, 4] for 7 money. He would choose the first.

Complete the function maximumToys. It should return an integer representing the maximum number of toys Mark can purchase, and has the following parameters:
  prices: an array of integers representing toy prices
  k: an integer representing Mark's budget
  Constraints:
    1 <= n <= 10**5
    1 <= k <= 10**5
    1 <= prices[i] <= 10**9
Input:
  The first line contains two integers, n and k, the number of priced toys and the amount of Mark's money.
  The second line contains n space separated integers, prices[i].
Sample Input:
  7 50
  1 12 5 111 200 1000 10
Output:
  An integer that denots the maximum number of toys Mark can buy for his son.
Sample Output:
  4
  He can buy at most 4 toys with the prices 1, 12, 5, and 10
*/

function maximumToys(prices, k) {
  // Sort prices array (numeric sort needed, sort() alone sorts as if values are strings)
  let sortedPrices = prices.sort(function(a, b){return a - b})
  // Remove any item whose price is more than k (can't buy in any case)
  for (let i = 0; i < sortedPrices.length; i ++) {
    if (sortedPrices[i] > k) {
      sortedPrices.splice(i)
    }
  }
  let priceGroups = []
  let priceGroup = []
  // for each price in sortedPrices
  for (let m = 0; m < sortedPrices.length; m ++) {
    // cannot reduce empty array, so push the item automatically (item is by definition less than or equal to k)
    for (let n = 0; n < sortedPrices.length; n ++) {
      if (priceGroup == []) {
        priceGroup.push(sortedPrices[n])
      } else {
        // declare variable for combined (reduced) prices
        let reducedGroup = priceGroup.reduce((a, b) => a + b, 0)

        // if adding a price keeps total under k or equal to k...
        if (reducedGroup + sortedPrices[n] <= k) {
          priceGroup.push(sortedPrices[n])
          // if we've reached the end of sortedPrices (no more prices)
          if (n == sortedPrices.length - 1) {
            // push array to master priceGroups array
            priceGroups.push(priceGroup)
            // reset priceGroup
            priceGroup = []
          }
        // else (if adding a price pushes total over k)...
        } else {
          // push priceGroup array to master priceGroups array
          priceGroups.push(priceGroup)
          // reset priceGroup
          priceGroup = []
        }
      }
    }
  }
  // check through priceGroups to find the longest item (individual priceGroup)
  var maxToys = null
  priceGroups.forEach(function(c) {
    if (c.length > maxToys) {
      maxToys = c.length
    }
  })
  console.log(maxToys)
  // return maxToys
}

maximumToys([1, 12, 5, 111, 200, 1000, 10], 50) // expected output 4

//
//
//

function maximumToysRefactored(prices, k) {
  // Sort the prices array (numeric sort needed, sort() alone sorts as if values are strings)
  let sortedPrices = prices.sort((a, b) => a - b),
      budget = k,
      numberOfToys = 0
  // while we still have money and the number of toys is less than the total toys
  while (budget > 0 && numberOfToys < sortedPrices.length) {
    // check for enough money
    if (budget - sortedPrices[numberOfToys] > 0) {
      // subtract toy price from budget
      budget -= sortedPrices[numberOfToys]
      // add 1 to numberOfToys
      numberOfToys++
    // not enough money
    } else {
      break
    }
  }
  console.log(numberOfToys)
  // return numberOfToys
}

maximumToysRefactored([1, 12, 5, 111, 200, 1000, 10], 50) // expected output 4
