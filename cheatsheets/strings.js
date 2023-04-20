const str = 'Hello World'

// String.match()
// Returns an array of matches of a regular expression against a string.
// The "g" flag indicates that the regular expression should be tested against all possible matches in a string.

str.match(/[A-Z]/g) // ["H"]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

const bigStr = '1234 ABCD abcd!.*&'

// [abc]	any character listed	[^abc]	any character not listed
bigStr.match(/[abc]/g) // "['a','b','c']"

// \w	word characters	\W	non-word characters (letters and numbers)
bigStr.match(/\w/g)

// \d	digits	\D	non-digits
bigStr.match(/\d/g)

// \s	whitespace	\S	non-whitespace
bigStr.match(/\s/g)

// String.replace()
// Returns a new string with some or all matches of a regular expression replaced by a replacement string.
str.replace('l', '*') // "He*lo World"

// String.split()
// Returns an array of strings split at the given index.
str.split(' ') // ["Hello", "World"]

// String.toLowerCase()
// Returns a new string with all the uppercase characters converted to lowercase.
str.toLowerCase() // "hello world"

// String.toUpperCase()
// Returns a new string with all the lowercase characters converted to uppercase.
str.toUpperCase() // "HELLO WORLD"

str.repeat(1)
