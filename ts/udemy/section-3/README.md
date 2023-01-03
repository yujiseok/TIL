# Section 3

- [Section 3](#section-3)
  - [1. Type Annotations and Inference](#1-type-annotations-and-inference)
      - [Type annotations](#type-annotations)
      - [Type inference](#type-inference)
  - [2. Annotations with Variables](#2-annotations-with-variables)
  - [3. Object Literal Annotations](#3-object-literal-annotations)
  - [4. Annotations Around Functions](#4-annotations-around-functions)
  - [5. Understanding Inference](#5-understanding-inference)
    - [언제 사용해야할까?](#언제-사용해야할까)
  - [6. The 'Any' Type](#6-the-any-type)
  - [7. Fixing 'Any' Type](#7-fixing-any-type)
  - [8. Delayed Initialization](#8-delayed-initialization)
  - [9. When Inference Doesn't Work](#9-when-inference-doesnt-work)

## 1. Type Annotations and Inference

#### Type annotations

- 타입스크립트에게 우리가 명시적으로 무슨 타입인지 코드로 알려주는 것

#### Type inference

- 타입스크립트가 자동적으로 타입을 추론하는 것

</br>

## 2. Annotations with Variables

```ts
let num: number = 123;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in obj
let now: Date = new Date();
```

다른 타입의 데이터를 할당할 시 타입스크립트가 오류를 발생시킨다.

</br>

## 3. Object Literal Annotations

```ts
// array
const colors: string[] = ["red", "green", "blue"];
const numbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

// class
class Car {}

const car: Car = new Car();

// object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
```

</br>

## 4. Annotations Around Functions

```ts
// function
const logNumber: (num: number) => void = (num: number) => console.log(num);
```

`: (num: number) => void`는 함수에 대한 타입 설명이다.

</br>

## 5. Understanding Inference

변수 선언과 초기화가 같은 줄에 있으면 타입스크립트는 타입을 우리에게 알려준다.

### 언제 사용해야할까?

- #### Type annotations
  - 변수가 선언된 후 같은 줄에서 값을 초기화하지 않는 경우
  - 타입이 추론되지 않은 변수인 경우
  - 함수의 리턴 값이 'any'인 경우
- #### Type inference
  - Always

</br>

## 6. The 'Any' Type

- string, boolean과 같은 타입
- 타입스크립트가 무슨 데이터 타입인지 알 수 없을 때
- Avoid variables with 'any' at all costs

> ✨ any 타입을 사용하면 타입스크립트를 사용하는 이유가 없다. 에러를 잡아내지 못함!

```ts
// When to use annotations
// 1. function that returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse 리턴 any type
console.log(coordinates); // { x: 10, y: 20 }
coordinates.asdfasdfsadf; // ➡️ 에러가 발생하지 않음!
```

</br>

## 7. Fixing 'Any' Type

```ts
const json = '{"x": 10, "y": 20}';
const coordinates: {
  x: number;
  y: number;
} = JSON.parse(json); // JSON.parse 리턴 any type
console.log(coordinates); // { x: 10, y: 20 }

coordinates. // ➡️ IDE 인텔리센스를 통해 접근할 수 있는 프로퍼티들을 보여줌
```

</br>

## 8. Delayed Initialization

```ts
// 2. when we declare a variable on one line and initialize it later
const words = ["red", "green", "blue"];
let foundWord; // any ➡️ boolean 타입을 명시해 any 타입을 해결 or false 값을 할당해 해결

// 해결법
let foundWord: boolean;
let foundWord = false;

for (let i = 0; i < words.length; i++) {
  // initialize it later
  words[i] === "green" ? (foundWord = true) : null;
}
```

</br>

## 9. When Inference Doesn't Work

```ts
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
```

타입 추론은 코드의 의도를 파악하지 못한다. 그렇기에 어노테이션을 통해 의도를 명확히 해준다.
