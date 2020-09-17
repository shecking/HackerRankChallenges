// THIS PROBLEM IS COMPLETE

/*
Two strings are anagrams of each other if the letters of one string can be rearranged to form the other string. Given a string, find the number of pairs of substrings of the string that are anagrams of each other.

For example, s = mom; the list of all anagrammatic pairs is:
[m, m] at positions [[0], [2]]
[mo, om] at positions [[0, 1], [1, 2]]

Complete the function sherlockAndAnagrams. It must return an integer that represents the number of anagrammatic pairs of substrings in s.
Constraints:
1 <= q <= 10 (no more than 10 queries)
2 <= |s| <= 100 (strings must be between 2 and 100 characters long, inclusive)

Input:
The first line contains an integer q, the number of queries
Each of the next q lines contains a string s to analyze.
Sample input:
2
abba
abcd

Output:
For each query, return the number of unordered anagrammatic pairs.
Sample output:
4
0

Explanation:
The list of all anagrammatic pairs is:
[a, a] at [[0], [3]]
[ab, ba] at [[0, 1], [2, 3]]
[b, b] at [[1], [2]]
[abb, bba] at [[0, 1, 2], [1, 2, 3]]
No pairs exist in the second query as no character repeats.
*/

function sherlockAndAnagrams(s) {
  var i, j, allSubstrings = []

  for (let i = 0; i < s.length; i ++) {
    for (let j = i + 1; j < s.length + 1; j ++) {
      allSubstrings.push(s.slice(i, j))
    }
  }
  allSubstrings.sort()
  // console.log(allSubstrings)
  // this gives us all possible substrings in s (allSubstrings array)
  var sortedSubstrings = []
  // Loop through allSubstrings
  for (let k = 0; k < allSubstrings.length; k ++) {
    // for each substring, split, sort, and rejoin it
    const inOrderString = allSubstrings[k].split('').sort().join('')
    sortedSubstrings.push(inOrderString)
  }
  // sort array of sorted substrings
  const sortedArrayOfSortedSubstrings = sortedSubstrings.sort()
  // console.log(sortedArrayOfSortedSubstrings)
  let duplicateCount = 0

  for (let m = 0; m < sortedArrayOfSortedSubstrings.length; m ++) {
    for (let n = m + 1; n < sortedArrayOfSortedSubstrings.length; n ++) {
      if (sortedArrayOfSortedSubstrings[m] == sortedArrayOfSortedSubstrings[n]) {
        duplicateCount ++
      }
    }
  }
  // console.log(duplicateCount)
  return duplicateCount
}

sherlockAndAnagrams('kkkk') // expected output is 10
