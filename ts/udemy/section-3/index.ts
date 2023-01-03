let num: number = 123;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in obj
let now: Date = new Date();

// array
const colors: string[] = ["red", "green", "blue"];
const nums: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

// class
class Car {}

const car: Car = new Car();

// object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber: (num: number) => void = (num: number) => console.log(num);

// When to use annotations
// 1. function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {
  x: number;
  y: number;
} = JSON.parse(json); // JSON.parse 리턴 any type
console.log(coordinates); // { x: 10, y: 20 }

// 2. when we declare a variable on one line and initialize it later
const words = ["red", "green", "blue"];
let foundWord; // any ➡️ boolean 타입을 명시해 any 타입을 해결.
for (let i = 0; i < words.length; i++) {
  // initialize it later
  words[i] === "green" ? (foundWord = true) : null;
}

// 3. variable whose type cannot be inferred correctly
const numbers = [-10, -1, 12];
// 좋지 못한 코드
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // 타입 추론은 코드의 의도를 파악하지 못한다.
    numberAboveZero = numbers[i]; // Type 'number' is not assignable to type 'boolean'.
  }
}
