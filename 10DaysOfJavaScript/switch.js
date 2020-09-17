function switchDemo(n) {
  // var n = parseInt(readLine())
  var intN = parseInt(n)
  switch (intN) {
    case 2:
      console.log('A')
      break
    case 3:
      console.log('B')
      break
    case 4:
      console.log('C')
      break
    case 5:
      console.log('D')
      break
    default:
      console.log('E')
  }
  console.log('Exited switch')
}
// switchDemo(2)

function getLetter(s) {
  let letter

  switch (s[0]) {
    case ('a' || 'e' || 'i' || 'o' || 'u'):
      letter = 'A'
      break
    case ('b' || 'c' || 'd' || 'f' || 'g'):
      letter = 'B'
      break
    case ('h' || 'j' || 'k' || 'l' || 'm'):
      letter = 'C'
      break
    case ('n' || 'p' || 'q' || 'r' || 's' || 't' || 'v' || 'w' || 'x' || 'y' || 'z'):
      letter = 'D'
      break
  }
  // return letter
  console.log(letter)
}

// getLetter('adfgt')

function getLetterRegex(t) {
  let letter = t[0]
  // console.log('First character: ', t[0])
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'A'
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      return 'B'
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      return 'C'
    default:
      return 'D'
    // default:
    //   letter = 'Failed'
  }
  // return letter
}
console.log(getLetterRegex('fiendkslenvls'))
