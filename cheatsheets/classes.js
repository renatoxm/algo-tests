class Dog {
  // Classes can have a constructor method.
  //   This is a special method that is called when the object is created (instantiated).
  //   Constructor methods are usually used to set initial values for the object.
  constructor(name) {
    this._name = name
  }

  // a method
  introduce() {
    console.log('This is ' + this._name + ' !')
  }

  // A static method
  static bark() {
    console.log('Woof!')
  }
}

const myDog = new Dog('Buster')
myDog.introduce()

// Calling the static method
Dog.bark()

/* extends
JavaScript classes support the concept of inheritance — a child class can extend a parent class. 
This is accomplished by using the extends keyword as part of the class definition.
Child classes have access to all of the instance properties and methods of the parent class. 
They can add their own properties and methods in addition to those. 
A child class constructor calls the parent class constructor using the super() method.
*/

// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate
    this.name = info.name
  }
}

// Child class
class Song extends Media {
  constructor(songData) {
    super(songData)
    this.artist = songData.artist
  }
}

const mySong = new Song({
  artist: 'Queen',
  name: 'Bohemian Rhapsody',
  publishDate: 1975,
})
