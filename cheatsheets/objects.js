// Update a Property of an Object
// Use the = operator:

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

object.myAge = 2043 // Updates myAge to 2043

// Turn an Object's Keys into an Array
// Use keys():

let object = {
  myName: 'Name',
  myAge: 1043,
}

let keys = Object.keys(object) // Returns [ 'myName', 'myAge' ];

// Turn an Object's Values into an Array
// Use values():
let object = {
  myName: 'Name',
  myAge: 1043,
}

let values = Object.values(object) // Returns [ 'Name', 1043 ];

// Turn Array or Map sets into an Object
// Use fromEntries:

let arrSets = [
  ['myName', 'Name'],
  ['myAge', 1043],
]

/* Returns {
        'myName' : 'Name',
        'myAge' : 1043
    } */
let generateObject = Object.fromEntries(arrSets)

// Shallow Clone an Object
// Use assign() or ...:

let object = {
  myName: 'Name',
  myAge: 1043,
}

// Creates a copy of object, which we can edit separately
let newObject = Object.assign({}, object)

// Creates a copy of object, which we can edit separately
let anotherClone = { ...object }
// Deep Clone an Object with only variables
// Use JSON.parse(JSON.stringify()):

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

// Creates a copy of object, which we can edit separately
let newObject2 = JSON.parse(JSON.stringify(object))
newObject2.myName.FirstName = 'Hello'
console.log(newObject2, object)
/*
    Returns {
      myAge: 1043,
      myName: {
        FirstName: "Hello",
        SecondName: "Surname"
      }
    }, {
      myAge: 1043,
      myName: {
        FirstName: "Name",
        SecondName: "Surname"
      }
    } */

// Merge two objects into the original variable
// Use assign():

let object = { myName: 'Name' }
let objectThree = { myAge: 1043 }
Object.assign(object, objectThree)

console.log(object, objectThree)
/* Returns {
        myAge: 1043,
        myName: "Name"
    }, {
        myAge: 1043
    } */

// Merge two objects into a new variable
// Use ....

let object = { myName: 'Name' }
let objectTwo = { myAge: 1043 }

let newObject4 = { ...object, ...objectTwo }

console.log(object, newObject4)
/* Returns {
        myName: "Name"
    }, {
        myName: "Name",
        myAge: 1043
    } */

// Note: if you merge two objects with ..., and there are duplicate keys (i.e. both have myAge), the second Object will overwrite the first.

// Prevent new items being added to an object, but allow previous items to be changed
// Use preventExtensions():

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

Object.preventExtensions(object)

// Throws a TypeError
object.myLocation = '123 Fake Street'

// Prevent any changes to an object
// Use freeze():

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

Object.freeze(object)

// Throws a TypeError
object.myLocation = '123 Fake Street'
// Throws a TypeError
object.myAge = 2043

// Turn Object into a String
// Use JSON.stringify():

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

// Returns {"myName":{"FirstName":"Name","SecondName":"Surname"},"myAge":1043}
console.log(JSON.stringify(object))

// Turn String into an Object
// Use JSON.parse():

let stringObject =
  '{"myName":{"FirstName":"Name","SecondName":"Surname"},"myAge":1043}'

/* Returns {
        'myName' : {
            'FirstName' : 'Name',
            'SecondName' : 'Surname'
        },
        'myAge' : 1043
    } */
console.log(JSON.parse(object))

// Check if Object has a property
// Use hasOwnProperty():

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

// Returns true
console.log(object.hasOwnProperty('myName'))

// Make a Property of an Object Unwritable so you can't change it
// Use defineProperty() and change writable:

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

Object.defineProperty(object, 'myAge', {
  writable: false,
})

// object.myAge remains 1043
object.myAge = 2043

// Ignore certain properties when using a for loop
// Use defineProperty() and change enumerable. If we set enumerable to false, that item will be ignored in forEach loops.

let object = {
  myName: {
    FirstName: 'Name',
    SecondName: 'Surname',
  },
  myAge: 1043,
}

Object.defineProperty(object, 'myAge', {
  enumerable: false,
})

// Returns only 'myAge'
Object.keys(object).forEach(function (item) {
  console.log(item)
})

// Convert Object to Array sets
// Use entries():

let object = {
  myName: 'Name',
  myAge: 1043,
}

// Returns [ [ 'myName', 'Name' ], [ 'myAge', 1043 ]];
let entries = Object.entries(object)
