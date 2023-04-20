// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // convert text to lowercase
  let straArr = stringA.toLowerCase().split('')
  let strbArr = stringB.toLowerCase().split('')
  // loop string a pass to a object with key equals to char, if not exist insert it else add 1
  let objA,
    objB = {}
  for (l of straArr) {
    objA[l] !== undefined ? objA[l]++ : objA[l]
  }
  for (l of strbArr) {
    objB[l] !== undefined ? objB[l]++ : objB[l]
  }
  console.log(objA)
  console.log(objB)

  // do the same for string b
  // compare two objects and see if they are equal
}

module.exports = anagrams
