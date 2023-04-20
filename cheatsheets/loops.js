// while
let i = 0

while (i < 5) {
  console.log(i)
  i++
}

// do... while
x = 0
i = 0

do {
  x = x + i
  console.log(x)
  i++
} while (i < 5)

// for
for (let i = 0; i < 4; i += 1) {
  console.log(i)
}

// for...in objects
let person = { name: 'SpongeBob', lastName: 'SquarePants', age: 34 }
for (let property in person) {
  console.log(`${property}: ${person[property]}`)
}

// for...of arrays
let num = 3
for (let i of num) {
  console.log('hi')
}

// forEach
// arr.forEach(callback(currentElement, index, array) {
//   // do something <- this is a callback
// });
let arr = [5, 6, 7]
arr.forEach(num => {
  console.log(num)
})
