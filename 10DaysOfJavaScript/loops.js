function vowelsAndConsonants(s) {
  var vowels = s.match(/[aeiou]/gi)
  var consonants = s.match(/[^aeiou$]/gi)
  var letters = vowels.concat(consonants)
  for (let i = 0; i < letters.length; i ++) {
    console.log(letters[i])
  }
}

vowelsAndConsonants('javascriptloops')
