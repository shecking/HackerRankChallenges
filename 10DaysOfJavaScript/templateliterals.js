/*
The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Reall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.

Complete the function in the editor so that it does the following:
1. Fins the initial values of s1 and s2 by plugging the A and P vlaues into the formula
(passed as [A, P])
2. Creates an array consisting of s1 and s2, sorted
3. Returns this array

Constraints: 1 <= s1, s2 <= 100
*/
function sides(expressions) {
  const sidesArray = []

  const s1 = ( expressions[1] + Math.sqrt((expressions[1]**2) - (16 * expressions[0])) ) / 4
  sidesArray.push(s1)
  const s2 = ( expressions[1] - Math.sqrt((expressions[1]**2) - (16 * expressions[0])) ) / 4
  sidesArray.push(s2)

  sidesArray.sort((a, b) => a - b)
  return sidesArray
}

console.log(sides([140, 48]))
