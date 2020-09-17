// THIS PROBLEM IS INCOMPLETE
// THIS LOOKS LIKE A REDUCING PROBLEM

/*
You are given an array and you need to find number of triplets of indices (i, j, k) such that the elements at those indices are in geometric progression for a given common ratio r and i < j < k.

A geometric progression is a sequence of numbers where each number after the first is found by multiplying the previous number by a fixed, non-zero number. This fixed number is called the common ratio. For example:
The sequence 2, 6, 18, 54... is a geometric progression with the common ratio 3.
            (2 * 3 = 6,
                6 * 3 = 18,
                   18 * 3 = 54)

Complete the countTriplets function.
It should return the number of triplets forming a geometric progression
for a given integer r, and has the following parameters:
arr: an array of integers
r: an integer, representing the common ratio

Input:
The first line contains two space separated integers:
n, the size of arr;
r, and the common ratio.
The second line contains n space separated integers representing arr[i].
Sample Input:
4 2 (arr size of 4, common ratio 2)
1 2 2 4 (arr values)

Output:
Return the count of triplets that form a geometric progression.
Sample Output:
2

Explanation:
There are 2 triplets that satisfy our criteria:
arr[[0], [1], [3]]
arr[[0], [2], [3]]
*/

function countTriplets(arr, r) {

}

countTriplets([1, 3, 9, 9, 27, 81], 3) // Should return 6
