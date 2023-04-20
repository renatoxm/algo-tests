const list = [1, 2, 3, 4];

// Array.map()
// Returns a new array with the results of calling a provided function on every element in this array.
list.map((el) => el * 2); // [2, 4, 6, 8]

// Array.filter()
// Returns a new array with all elements that pass the test implemented by the provided function.
list.filter((el) => el % 2 === 0); // [2, 4]

// Array.reduce()
// Reduce the array to a single value. The value returned by the function is stored in an accumulator (result/total).
list.reduce((total, item) => total + item, 0); // 15

// Array.find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
list.find((el) => el === 3); // 3
list.find((el) => el === 6); // undefined

// Array.indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
list.indexOf(3); // 2
list.indexOf(6); // -1

// Array.pop()
// Removes the last element from an array and returns that element.
list.pop(); // 5
list; // [1, 2, 3, 4]

// Array.push()
// Appends new elements to the end of an array, and returns the new length.
list.push(6); // 6
list; // [1, 2, 3, 4, 5, 6]

// Array.splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
list.splice(1, 2); // [2, 3]
list; // [1, 4, 5]

// Array.slice()
// Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
list.slice(1, 3); // [2, 3]
list; // [1, 2, 3, 4, 5]

// Array.join()
// Joins all elements of an array into a string.
list.join(', '); // "1, 2, 3, 4, 5"

// Array.reverse()
// Reverses the order of the elements in an array.
list.reverse(); // [5, 4, 3, 2, 1]
list; // [5, 4, 3, 2, 1]

// Array.sort()
// Sorts the elements of an array in place and returns the array. The default sort order is according to string Unicode code points.
array.sort(); // 😧 [1, 10, 2, 3, 4]
array.sort((a, b) => a - b); // 😀 [1, 2, 3, 4, 10]