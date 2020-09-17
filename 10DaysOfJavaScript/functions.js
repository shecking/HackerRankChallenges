function factorial(n) {
  let factorialArray = []
  for (let i = n; i > 0; i --) {
    factorialArray.push(i)
  }
  const reducer = (acc, current) => acc * current
  return factorialArray.reduce(reducer)
}

factorial(4)
