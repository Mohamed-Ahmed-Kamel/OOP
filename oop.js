// Object.create(fromObject);
// Object.assign(target, ...sources);
/*
  Delete Operator
  delete operator is used to delete a property from an object.
  // delete property // Don't Delete Varaibles 
  // Object.freez(obj); // don't add and don't delete properties
*/
// [1] Constructor Function
// [2] ProtoType
// [3] Class syntax

// function User(name) {
//     this.name = name;
//     this.welcome = function () {
//         return `Welcome ${this.name}`;
//     };
// }

// let user1 = new User("Mohamed");
// let user2 = new User("Ahmed");

// (1) Constructor Function
// let user1 = new User("Mohamed");

// let obj1 = new Object({ name: "mohamed", age: 22 });
// let obj2 = { name: "Ahmed", age: 44 };

// let num1 = new Number(1);
// let num2 = 2;

// let str1 = new String("string 1");
// let str3 = "string 3";

/* ==================== [2] ProtoType ========================================*/
/*
  [1] Every object has a prototype property that points to another object.
  [2] The prototype object is used to add properties and methods to the object.
  [3] Prorotype chain Ends with Object.prototype.
  [4] In JavaScript => Function Is Object.
*/
// (1) ProtoType
// console.log(User.prototype); // Object --> {property: function}

// const arr = [1, 2, 3, 4, 5]; // the constructor is [Array]
// console.log(Array.prototype);
// console.log(arr.reverse());

// console.log(User.prototype);
// console.log(user2);

// Add methods
// User.prototype.addTitle = function() {
//     return `Mr. ${this.name}`
// }

// console.log(Object.prototype)
// Object.prototype.theName = "My name is Mohamed"

// const MyObject = { a: 1, b: 2 }

// (2) ProtoType
// console.log(String.prototype);
// String.prototype.zFill = function (width) {
//   let result = this;
//   while (result.length < width) {
//     result = "0" + result
//   }
//   return result.toString()
// };

// let str = "12"
// console.log("".zFill(5));
// console.log(str.zFill(5));
// console.log("122".zFill(5));
// console.log("1243".zFill(5));
// console.log("12433".zFill(5));

// String.prototype.sayILoveYou = function() {
//   return `I Love You ${this}`
// }
// let namee = "Mohamed"
// console.log(namee.sayILoveYou());

// (3) ProtoType Chain
// function User(name) {
//   /* How JavaScrpt Create Constructor Function
//     [1] Create Empty Object
//     [2] Assign `this` to the Empty Object
//     this = {};
//     [3] this.[[Prototype]] = Object.prototype;
//     [4] return the New Object
//     return this;
//   */
//   this.name = name;

//   // if (!(this instanceof User)) {
//   //   throw new Error("User is a constructor and should be called with the `new` keyword");
//   // }

//   // ES6
//   if (!new.target) {
//     throw new Error("User is a constructor and should be called with the `new` keyword");
//   }
// }

// let user1 = new User("Mohamed");
// let user2 = new User("Ahmed");

// if (User.prototype === user1.__proto__) {
//   console.log("True");
// }


/* ==================== [3] Class syntax ========================================*/
// (1) Class syntax
// Constructor Function In JavaScript
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayHello = function () {
//     return `Hello ${this.name}`;
//   }
// }
// let user1 = new User("Mohamed", 22);

// Constructor Function In ES6
// class User2 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }
//   showName() {
//     return this.name;
//   }
// }
// let user2 = new User2("Ahmed", 44);
// // let user3 = User2("Ahmed", 44); // TypeError

// console.log(typeof User2); // Function
// console.log(User2 === User2.prototype.constructor); // True

// (2) Static Properties & Methods
// class User {
//   // Static Properties
//   static counter = 0;

//   constructor(name, age, counter) {
//     this.name = name;
//     this.age = age;
//     this.counter = counter;
//     User.counter++
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }

//   // Static Methods
//   static countObjects = function() {
//     return `There are ${this.counter} objects`;
//   }
// }
// let user1 = new User("Mohamed", 22, 8);
// let user2 = new User("Mohamed", 22, 8);
// let user3 = new User("Mohamed", 22, 8);

// console.log(User.countObjects());


// (3) Inheritance
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   sayHello() {
//     return `Hello ${this.name}`;
//   }
//   showEmail() {
//     return `Your Email Is ${this.email}`;
//   }
// }
// class Admin extends User {
//   constructor(name, email) {
//     super(name, email)
//   }
//   adminMgs() {
//     return `You Are Admin`
//   }
//   sayHello() {
//     return `Hello From Child Class`;
//   }
// }
// let admin1 = new Admin("Mohamed", "Mohamed@gmail.com")

// (4) JavaScript Accessors => Getters & Setters
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   sayHello() {
//     return `Hello: ${this.name}`;
//   }
//   get showInfo() {
//     return `Name: ${this.name}, Email: ${this.email}`;
//   }
//   set changeName(newName) {
//     this.name = newName;
//   }
// }
// let user1 = new User("Mohamed", "mohamed@gmail.com")
// console.log(user1.name);
// console.log(user1.email);
// console.log(user1.showInfo);

// user1.changeName = "Ahmed";

// console.log(user1.name);
// console.log(user1.email);
// console.log(user1.showInfo);


/* ==================== [4] Object Meta Data ========================================*/
/* Any property in object has attributes that can be changed like.
  [1] writable => `true` for changing the value of the property
  [2] enumerable => `true` for showing the property in for..in loop
  [3] configurable => `true` for changing the attributes of the property
  ======================
  Object.defineProperty(obj, prop, descriptor)
*/
// (1) Introduction

// const MyObject = {
//   a: 1,
//   b: 2
// }

// Object.defineProperty(MyObject, "c", {
//   writable: false,
//   enumerable: false,
//   configurable: true,
//   value: 3
// });
// Object.defineProperty(MyObject, "c", {
//   writable: true,
// });

// console.log(delete MyObject.c); // Will return false because c is not configurable
// MyObject.c = 100; // Will not change the value of c because writable is false
// for (let prop in MyObject) {
//   console.log(prop) // Will not show c because enumerable is false
// }
// console.log(Object.getOwnPropertyNames(MyObject)); // To show all properties
// console.log(MyObject);

// (2) Object.defineProperties & Training
// const MyObject = { a: 1 };
// Object.defineProperty(MyObject, "b", {
//   value: 2,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });
// Object.defineProperty(MyObject, "c", {
//   value: 3,
// });
// MyObject.d = 4;

// Object.defineProperties(MyObject, {
//   e: {
//     value: 5,
//     writable: true,
//     enumerable: true,
//   },
//   f: {
//     value: 6,
//   },
//   g: {
//     value: 7,
//   }
// })

// console.log(MyObject);
// console.log(Object.getOwnPropertyDescriptors(MyObject));
// console.log(Object.getOwnPropertyNames(MyObject)); // To show all properties
// console.log(Object.keys(MyObject)); // To show all properties can be used in for..in loop


/* ==================== [5] The End ========================================*/
/*
  Importants Notes
  [1] Arrow Fuction => Do Not Have a Prototype => Cannot be used as a constructor
  [2] You Can Use Object Inside Constructor Function
  [3] f = function() {} === f(){}
*/

// class User {
//   constructor(first, last, age, email) {
//     this.name = {
//       first,
//       last
//     };
//     this.age = age;
//     this.email = email
//   }
//   sayHello = function() {
//     return `Hello ${this.name.first}`;
//   }
//   sayHi() {
//     return `Hi ${this.name.first}`;
//   }
// }

// let user1 = new User("Mohamed", "Ahmed", 22);

// console.log(user1.name.first);
// console.log(user1.name.last);
// console.log(user1.sayHello());
// console.log(user1.sayHi());