// THIS PROBLEM IS COMPLETED

/*
A broker wants to review their book of customers to see which are most active.
Given a list of trades by customer name, determine which customers account for at least
5% of the total number of trades. Order the list alphabetically by name.

Example:
n = 23
customers = ["Bigcorp", "Bigcorp", "Acme", "Bigcorp", "Zork", "Zork", "Abc", "Bigcorp", "Acme", "Bigcorp", "Bigcorp", "Zork", "Bigcorp", "Zork", "Zork", "Bigcorp", "Acme", "Bigcorp", "Acme", "Bigcorp", "Acme", "Littlecorp", "Nadircorp"]

Bigcorp had 10 trades, equaling 43.48& of all trades.
Both Acme and Zork had 5 trades, equaling 21.74% of all trades (each).
Littlecorp, Nadircorp, and Abc had 1 trade, equaling 4.35% of all trades (each).
Answer is ["Acme", "Bigcorp", "Zork"].

Function Description:
Complete the mostActive function.
mostActive has the following parameter:
-- string customers[n]: an array of customer names

returns:
string[]: an alphabetically ascending array of customer names

Constraints:
-- 1 <= n <= 10^5
-- 1 <= length of customers[i] <= 20
-- The first character of customers[i] is a capital letter.
-- All characters of customers[i] except for the first one are lowercase.
-- It is guaranteed that at least one customer makes at least 5% of the trades.
*/
// This function accepts an array of strings, customers
// This function is expected to return an array of strings
function mostActive(customers) {
  // customers is original array with duplicates
  // Create new array with no duplicates
  const uniqueCustomers = [...new Set(customers)].sort()
  // Create empty array to hold keys and values of customers and trades
  const customerDict = []
  // populate customerDict with key value pairs
  for (let i = 0; i < uniqueCustomers.length; i ++) {
    customerDict.push({ name: uniqueCustomers[i], trades: 0 })
  }
  // looping through customers array to add trade numbers to each unique customer
  for (let j = 0; j < customers.length; j ++) {
    for (let k = 0; k < customerDict.length; k++) {
      if (customerDict[k].name == customers[j]) {
        customerDict[k].trades ++
      }
    }
  }
  // customerDict now contains key and value pairs
  // customers.length = the total number of trades
  const aboveFivePercent = []
  for (let m = 0; m < customerDict.length; m ++) {
    if ((customerDict[m].trades / customers.length) > .05) {
      aboveFivePercent.push(customerDict[m].name)
    }
  }
  console.log(aboveFivePercent)
  // prints ["Acme", "Bigcorp", "Zork"]
}

mostActive(["Bigcorp", "Bigcorp", "Acme", "Bigcorp", "Zork", "Zork", "Abc", "Bigcorp", "Acme", "Bigcorp", "Bigcorp", "Zork", "Bigcorp", "Zork", "Zork", "Bigcorp", "Acme", "Bigcorp", "Acme", "Bigcorp", "Acme", "Littlecorp", "Nadircorp"])
