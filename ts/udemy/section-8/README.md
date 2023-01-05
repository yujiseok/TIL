**TOC**

- [Section 8](#section-8)
  - [1. Classes](#1-classes)
  - [2. Basic Inheritance](#2-basic-inheritance)
  - [3. Instance Method Modifiers](#3-instance-method-modifiers)
  - [4. Fields in Classes](#4-fields-in-classes)
  - [5. Fields with Inheritance](#5-fields-with-inheritance)

# Section 8

## 1. Classes

클래스는 객체를 만들기 위한 청사진이다.

```ts
class Vehicle {
  drive(): void {
    console.log("Vroom");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();

vehicle.drive();
vehicle.honk();
```

<br/>

## 2. Basic Inheritance

```ts
// vehicle이 하는 메서드를 다 가지고 있어야함
class Car extends Vehicle {
  drive(): void {
    console.log("VROOM VROOM");
  }
}

const car = new Car();
car.drive();
car.honk();
```

extends 키워드를 사용해 부모 클래스를 상속받을 수 있다.
자녀 클래스에서 메서드를 오버라이드 할 수 있다.

<br/>

## 3. Instance Method Modifiers

타입스크립트의 클래스는 접근 제한자를 지원한다.
각 접근 제한자는 단어의 뜻과 비슷한 역을 한다.

- ### public
  - public 접근 제한자는 아무 곳에서나 호출될 수 있다.
- ### private
  - private 접근 제한자는 정확히 선언된 그 클래스 안에서만 호출될 수 있다.

```ts
class Car extends Vehicle {
  private drive(): void {
    console.log("VROOM VROOM");
  }
}

const car = new Car();
car.drive(); // Property 'drive' is private and only accessible within class 'Car'

class Car extends Vehicle {
  private drive(): void {
    console.log("VROOM VROOM");
  }

  // class 안에서 호출 가능
  startDriving(): void {
    this.drive();
  }
}

const car = new Car();
car.startDriving();
```

- ### protected
  - protected 접근 제한자는 선언된 클래스와 자식 클래스 안에서 호출될 수 있다.

<br/>

## 4. Fields in Classes

constructor 함수를 통해 fields를 생성한다.

```ts
class Vehicle {
  color: string = "red";
  constructor(color) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
```

접근 제한자를 이용하면 좀 더 간결하게 fields를 생성할 수 있다.

```ts
class Vehicle {
  constructor(public color: string) {}
// ...
```

<br/>

## 5. Fields with Inheritance

```ts
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);

  // ...
```

super 키워드를 이용해 상속받은 클래스에서도 constructor 함수를 사용할 수 있게 한다.
