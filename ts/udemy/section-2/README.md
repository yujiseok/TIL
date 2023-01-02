# Section 2

- [Section 2](#section-2)
  - [1. Types](#1-types)
  - [2. More on Types](#2-more-on-types)
      - [1. Primitive Types](#1-primitive-types)
      - [2. Object Types](#2-object-types)
      - [왜 우리는 타입에 신경써야 할까?](#왜-우리는-타입에-신경써야-할까)
  - [3. Examples of Types](#3-examples-of-types)
  - [4. Where Do We Use Types?](#4-where-do-we-use-types)

## 1. Types

- Type : Easy way to refer to the different properties + functions that a value has

<br/>

## 2. More on Types

모든 값에는 타입이 존재한다.
타입은 두 가지로 나뉜다.

#### 1. Primitive Types

가장 기초적인 타입

- number
- string
- boolean
- symbol
- void
- null
- undefined

#### 2. Object Types

- functions
- classes
- arrays
- objects

#### 왜 우리는 타입에 신경써야 할까?

1. 타입은 컴파일러가 에러를 잡아내는 데 사용됨
2. 타입은 다른 개발자가 어떤 타입의 데이터인지 알 수 있게 도움을 줌

<br/>

## 3. Examples of Types

```ts
const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {}

const red = new Color();
```

타입을 이용하면, 프로퍼티와 메서드에 접근할 수 있다.

<br/>

## 4. Where Do We Use Types?

모든 곳에서 타입을 사용할 수 있다.
