**TOC**

- [17장 생성자 함수에 의한 객체 생성](#17장-생성자-함수에-의한-객체-생성)
  - [17.1 Object 생성자 함수](#171-object-생성자-함수)
  - [17.2 생성자 함수](#172-생성자-함수)
    - [1. 객체 리터럴에 의한 객체 생성 방식의 문제점](#1-객체-리터럴에-의한-객체-생성-방식의-문제점)
    - [2. 생성자 함수에 의한 객체 생성 방식의 장점](#2-생성자-함수에-의한-객체-생성-방식의-장점)
    - [3. 생성자 함수의 인스턴스 생성 과정](#3-생성자-함수의-인스턴스-생성-과정)
      - [1. 인스턴스 생성과 this 바인딩](#1-인스턴스-생성과-this-바인딩)
      - [2. 인스턴스 초기화](#2-인스턴스-초기화)
      - [3. 인스턴스 반환](#3-인스턴스-반환)
    - [4 constructor와 non-constructor 구분](#4-constructor와-non-constructor-구분)
    - [5. new 연산자](#5-new-연산자)
- [18장 함수와 일급 객체](#18장-함수와-일급-객체)
  - [18.1 일급 객체](#181-일급-객체)
- [19장 프로토타입](#19장-프로토타입)
  - [19.1 객체지향 프로그래밍](#191-객체지향-프로그래밍)
  - [19.2 상속과 프로토타입](#192-상속과-프로토타입)
  - [19.3 프로토타입 객체](#193-프로토타입-객체)
  - [19.8 오버라이딩과 프로퍼티 섀도잉](#198-오버라이딩과-프로퍼티-섀도잉)
  - [19.10 instanceof 연산자](#1910-instanceof-연산자)
  - [19.12 정적 프로퍼티/메서드](#1912-정적-프로퍼티메서드)
  - [19.13 프로퍼티 존재 확인](#1913-프로퍼티-존재-확인)
    - [1. in 연산자](#1-in-연산자)
    - [hasOwnProperty 메서드](#hasownproperty-메서드)
  - [19.14 프로퍼티 열거](#1914-프로퍼티-열거)
    - [1. for...in 문](#1-forin-문)
      - [2. Object.keys/values/entries 메서드](#2-objectkeysvaluesentries-메서드)

# 17장 생성자 함수에 의한 객체 생성

객체는 객체 리털 이외에도 다양한 방법으로 생성할 수 있다.

## 17.1 Object 생성자 함수

new 연산자와 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.

```js
const person = new Object();
```

생성자 함수란 new 연산자와 함께 호출하여 인스턴스를 생성하는 함수다.

Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp, Promise 등의 빌트인 생성자 함수를 제공한다.

> ✨ Object 생성자 함수를 이용해 객체를 생성하는 방식은 그다지 유용하지 않다.

<br/>

## 17.2 생성자 함수

### 1. 객체 리터럴에 의한 객체 생성 방식의 문제점

객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴은 단 하나의 객체만 생성한다.

객체 리터럴에 의해 객체를 생성하는 경우 프로퍼티 구조가 동일함에도 매번 같은 프로퍼티와 메서드를 기술해야 한다.

```js
const person1 = {
  name: "John",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
const person2 = {
  name: "Jane",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
```

### 2. 생성자 함수에 의한 객체 생성 방식의 장점

생성자 함수에 의해 객체를 생성하면, 클래스와 같이 동일한 구조의 객체를 간편하게 생성할 수 있다.

```js
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi ${this.name}`);
  };
}

const person1 = new Person("John");
const person2 = new Person("Jane");
```

new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.

### 3. 생성자 함수의 인스턴스 생성 과정

생성자 함수의 역할은 구조가 동일한 인스턴스르 생성하기 위한 템플릿으로서 동작

즉 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화하는 것

생성자 함수는 자바스크립트 엔진의 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다.
그 과정은 다음과 같다.

#### 1. 인스턴스 생성과 this 바인딩

암묵적으로 빈객체가 생성되고 this에 바인딩된다 ➡️ 생성자 함수 내부에서 this가 생성할 인스턴스를 가리키는 이유

런타임 이전에 실행된다.

#### 2. 인스턴스 초기화

생성자 함수가 인수로 전달받은 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다. ➡️ 개발자가 기술한다.

#### 3. 인스턴스 반환

생성자 함수의 내부 처리가 끝나면 인스턴스가 바인딩된 this가 암묵적으로 반환된다.

만약 명시적으로 객체를 리턴하면 명시된 객체가 반환된다.
하지만 원시값 반환은 무시된다.

### 4 constructor와 non-constructor 구분

자바스크립트 엔진은 함수 정의에 따라 constructor와 non-constructor로 구분한다.

- constructor : 함수 선언문, 함수 표현식, 클래스
- non-constructor : 메서드(ES6 메서드 축약), 화살표 함수

### 5. new 연산자

new 연산자를 사용해 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.
단 constructor이어햐 동작한다.

<br/>

# 18장 함수와 일급 객체

## 18.1 일급 객체

다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.

1. 무명의 리터럴로 생성 가능 ➡️ 즉 런타임 생성 가능
2. 변수나 자료구조에 저장
3. 함수의 매개변수에 전달
4. 함수의 반환값으로 사용

자바스크립트의 함수는 일급 객체다.
따라서 값을 사용할 수 있는 곳이라면 어디서든지 리터럴로 정의할 수 있으며 함수 객체로 평가된다.

함수형 프로그래밍을 가능하게 한다.

<br/>

# 19장 프로토타입

자바스크립트는 멀티 패러다임 프로그래밍 언어다.
자바스크립트는 프로토타입 기반의 객체지향 프로그래밍 언어다.

자바스크립트를 이루고 있는 거의 모든 것이 객체다.

<br/>

## 19.1 객체지향 프로그래밍

객체지향 프로그래밍은 여러 개의 독립적 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 말한다.

OOP는 실체를 인식하는 철학적 사고를 프로그래밍에 접목하려는 시도에서 시작한다.
실체는 속성을 가지고 있고, 이를 통해 실체를 인식하거나 구별할 수 있다.

프로그래밍에 필요한 속성만 추려 내어 표현하는 것을 추상화라 한다.
객체는 속성을 통해 여러 개의 값을 하나의 단위로 구성하는 복합적인 자료구조이다.

OOP에서는 객체의 상태를 나타내는 데이터와 상태를 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어 생각한다.

즉 객체는 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 자료구조라고 할 수 있다.

<br/>

## 19.2 상속과 프로토타입

상속은 OOP의 핵심이다.
자바스크립트는 프로토타입을 통해 중복을 제거한다.

```js
function Person(name) {
  this.name = name;
  this.sayHi = function () {
    console.log(`Hi ${this.name}`);
  };
}

const person1 = new Person("John");
const person2 = new Person("Jane");

console.log(person1.sayHi === person2.sayHi); // false
```

위의 생성자 함수로 생성된 인스턴스들은 sayHi라는 메서드를 갖는다. sayHi라는 메서드는 단 하나만 생성하여 모든 인스턴스가 공유해 사용하는 것이 바람직하다.
그런데 인스턴스를 생성할 때마다 sayHi 메서드가 생성되고 중복 소유한다.

이런 중복은 메모리를 낭비하고 퍼포먼스에 악영향을 준다.

상속을 통해 이런 중복을 제거해 보자. 프로토타입을 이용해 상속을 구현한다.

```js
function Person(name) {
  this.name = name;
}

// 프로토타입을 이용한 상속
Person.prototype.sayHi = function () {
  console.log(`Hi ${this.name}`);
};

const person1 = new Person("John");
const person2 = new Person("Jane");

console.log(person1.sayHi === person2.sayHi); // true
```

상속은 코드의 재사용이라는 관점에서 매우 유용하다.

<br>

## 19.3 프로토타입 객체

프로토타입은 객체 간 상속을 구현하기 위해 사용된다. 프로토타입은 어떤 객체의 부모 객체의 역할을 하는 객체로 다른 객체에게 공유된 프로퍼티를 제공한다.

<br>

## 19.8 오버라이딩과 프로퍼티 섀도잉

프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 체인을 따라
프로토타입 프로퍼티를 덮어쓰는 것이 아닌, 인스턴스 프로퍼티로 추가된다.

이런 현상을 오버라이딩이라고 한다. 상속 관계에 의해 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉이라 한다.

<br>

## 19.10 instanceof 연산자

```js
객체 instanceof 생성자 함수
```

우변의 생성자 함수의 프로토타입에 바인딩된 객체가 좌변의 객체의 프로토타입 체인 상에 존재하면 true 그렇지 않으면 false로 평가된다.

```js
// ...
console.log(person1 instanceof Person); // true
```

<br>

## 19.12 정적 프로퍼티/메서드

정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.

```js
Person.staticMethod = function () {
  console.log("Static Method");
};

Person.staticMethod();
```

생성자 함수는 객체이므로 자신의 프로퍼티/메서드를 소유할 수 있다.

> ✨ 생성자 함수로 생성한 인스턴스는 정적 프로퍼티/메서드에 접근할 수 없다.

<br>

## 19.13 프로퍼티 존재 확인

### 1. in 연산자

in 연산자는 key를 이용해 객체내 특정 프로퍼티가 존재하는지 확인한다.

```js
key in object;

const puppy = {
  breed: "Poodle",
  color: "Silver",
};

console.log("breed" in puppy); // true
```

in 연산자는 대상 객체의 프로퍼티뿐 아니라 상속받은 모든 프로토타입의 프로퍼티를 확인하므로 주의해야한다.

### hasOwnProperty 메서드

hasOwnProperty 메서드를 사용해도 객체에 특정 프로퍼티가 존재하는지 확인할 수 있다.

```js
const puppy = {
  breed: "Poodle",
  color: "Silver",
};

console.log(puppy.hasOwnProperty("breed")); // true
```

> ✨ 상속된 프로토타입의 프로퍼티 key인 경우 false를 반환한다.

<br>

## 19.14 프로퍼티 열거

### 1. for...in 문

객체의 모든 프로퍼티를 순회하며 열거하려면 for...in 문을 사용하면 된다.

```js
for (const key in object) {
  // ...
}

for (const key in puppy) {
  console.log(key, puppy[key]);
  // breed Poodle
  // color Silver
}
```

for...in 문은 상속받은 프로토타입으 프로퍼티까지 열거한다.

#### 2. Object.keys/values/entries 메서드

객체 자신의 고유 프로퍼티만 열거하기 위해서 사용한다.

1. Object.keys

Object.keys 메서드는 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다.

```js
console.log(Object.keys(puppy)); // [ 'breed', 'color' ]
```

2. Object.values

Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티 값을 배열로 반환한다.

```js
console.log(Object.values(puppy)); // [ 'Poodle', 'Silver' ]
```

3. Object.entries

Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티 키와 값의 쌍을 배열로 반환한다.

```js
console.log(Object.entries(puppy)); // [ [ 'breed', 'Poodle' ], [ 'color', 'Silver' ] ]
```
