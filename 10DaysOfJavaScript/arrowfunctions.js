/*
Complete the modifyArray function. It has one parameter, an array nums. It must iterate through the array performing one of the following actions on each element:
  If the element is even, multiply the element by 2.
  If the element is odd, multiple the element by 3.
Then return the modified array.

*/
function modifyArray(nums) {
  const newArray = nums.map(num => {
    if (num % 2 == 0) {
      return (num * 2)
    } else {
      return (num * 3)
    }
  })
  return newArray
}

console.log(modifyArray([1, 2, 3, 4, 5])) // returns [3, 4, 9, 8, 15]
