//1 Create a Basic JavaScript Object
let dog = {
    name: 'Puppy',
    numLegs: 4
  };

//2 Use Dot Notation to Access the Properties of an Object
// let dog = {
//     name: "Spot",
//     numLegs: 4
//   };
//   // Only change code below this line
//   console.log(dog.name, dog.numLegs);

//3 Create a Method on an Object
let dog1 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { 
      return "This dog has " + dog.numLegs + " legs.";
    }
};
dog1.sayLegs();

//4 Make Code More Reusable with the this Keyword
// let dog = {
//     name: "Spot",
//     numLegs: 4,
//     sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
//   };
// dog.sayLegs();

//5 Define a Constructor Function
function Dog() {
    this.name = 'puppy';
    this.color = 'brown';
    this.numLegs = 4;
}

//6 Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
let hound = new Dog;

//7 Extend Constructors to Receive Arguments
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  let terrier = new Dog('puppy', 'brown');

//8 Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
// Only change code below this line
let myHouse = new House(4);
myHouse instanceof House;

//9 Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
let canary = new Bird("Tweety");
let ownProps = [];
  // Only change code below this line
  for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }

//10 Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
  }
// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;

//11 Iterate Over All Properties
// function Dog(name) {
//     this.name = name;
//   }
// Dog.prototype.numLegs = 4;
// let beagle = new Dog("Snoopy");
// let ownProps = [];
// let prototypeProps = [];
// // Only change code below this line
// for (let property in beagle) {
//     if (Dog.hasOwnProperty(property)) {
//       ownProps.push(property);
//     } else {
//       prototypeProps.push(property);
//     }
// }

//12  Understand the Constructor Property
function Dog(name) {
    this.name = name;
  }
// Only change code below this line
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } else {
      return false;
    }
  }

//13 Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
  }
Dog.prototype = {
    // Only change code below this line
    numLegs: 2, 
    eat: function() {
      console.log("bark bark bark");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

//14 Remember to Set the Constructor Property when Changing the Prototype
//after dog prototype in above
constructor: Dog

// 15 Understand Where an Object’s Prototype Comes From
// function Dog(name) {
//     this.name = name;
//   }
// let beagle = new Dog("Snoopy");
// // Only change code below this line
// Dog.prototype.isPrototypeOf(beagle);

//16 Understand the Prototype Chain
// function Dog(name) {
//     this.name = name;
//   }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle);  // yields true
// // Fix the code below so that it evaluates to true
// Object.prototype.isPrototypeOf(Dog.prototype);

//17 Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name;
  }
  Cat.prototype = {
    constructor: Cat
  };
  function Bear(name) {
    this.name = name;
  }
  Bear.prototype = {
    constructor: Bear
  };
  function Animal() {}
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

//18 Inherit Behaviors from a Supertype
// Only change code below this line
// let duck = Object.create(Animal.prototype); // Change this line
// let beagle = Object.create(Animal.prototype);; // Change this line

//19 Set the Child's Prototype to an Instance of the Parent
// function Animal() { }
// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };
// function Dog() { }
// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);
// let beagle = new Dog();
// beagle.eat(); 

//20 Reset an Inherited Constructor Property
// function Animal() { }
// function Bird() { }
// function Dog() { }
// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
// // Only change code below this line
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;
// let duck = new Bird();
// let beagle = new Dog();

//21 Add Methods After Inheritance
// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };
// function Dog() { }
// // Only change code below this line
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };
// // Only change code above this line
// let beagle = new Dog();

//22 Override Inherited Methods
function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
// Only change code below this line
Penguin.prototype.fly = function() {
  return "Alas, this is a flightless bird.";
};
// Only change code above this line
let penguin = new Penguin();
console.log(penguin.fly());

//23 Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
  };
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  // Only change code below this line
  let glideMixin = function(obj) {
    obj.glide = function() {
      console.log("Gliding!");
    };
  };
glideMixin(bird);
glideMixin(boat);

//24 Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
    this.getWeight = function() {
      return weight;
    };
  }

//25  Understand the Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("A cozy nest is ready");
  })();

// 26 Use an IIFE to Create a Module
let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    };
  })();
  

