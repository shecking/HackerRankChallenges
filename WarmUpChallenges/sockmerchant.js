// THIS PROBLEM IS COMPLETED

// Constraints:
  // 1 <= n <= 100
    // n is the number of total socks
  // 1 <= ar[i] <= 100, where 0 <= i < n
    // ar[] is an array, representing the colors of socks as integers
// Look through array
// Find pairs
  // Number of items % 2 must equal 0
  // If true, items / 2 = number of pairs
  // If false, (items - 1) / 2 = number of pairs

function sockMerchant (n, ar) {
  // Use goof count to track number of each item, clear after each completed count
  // Use count to keep track of number of pairs
  let pair_count = 0
  // sorted array yields [1, 1, 1, 5, 5, 5, 5, 8, 8, 8, 8]
  const unique_socks = Array.from(new Set(ar))
  // unique_socks = [1, 5, 8]

  for (let i = 0; i < unique_socks.length; i ++) {
    let sock_count = 0
    for (let j = 0; j < ar.length; j ++) {
      if (ar[j] == unique_socks[i]) {
        sock_count = sock_count + 1
      }
    }
    if (sock_count % 2 == 0) {
      pair_count = pair_count + (sock_count / 2)
    } else {
      pair_count = pair_count + ((sock_count - 1) / 2)
    }
  }
  console.log(pair_count)
}
sockMerchant(11, [1, 5, 8, 5, 1, 8, 5, 5, 8, 1, 8])
