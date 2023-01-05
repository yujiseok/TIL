function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const person1 = new Person("John");
const person2 = new Person("Jane");

Person.staticMethod = function () {
  console.log("Static Method");
};

const puppy = {
  breed: "Poodle",
  color: "Silver",
};

console.log(Object.entries(puppy)); // [ [ 'breed', 'Poodle' ], [ 'color', 'Silver' ] ]

Object.entries(puppy).forEach(([key, value]) => console.log(key, value));
