function getSecondLargest(nums) {
  nums.sort((a, b) => a - b)
  for (let i = nums.length - 1; i >= 0; i --) {
    if (nums[i - 1] < nums[i]) {
        return nums[i - 1]
    }
  }
}

getSecondLargest([1, 3, 5, 7, 9, 2, 4, 6, 10, 8])
