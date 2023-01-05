**TOC**

- [Section 7](#section-7)
  - [1. Interfaces](#1-interfaces)
    - [인터페이스란?](#인터페이스란)
  - [2. Long Type Annotations](#2-long-type-annotations)
  - [3. Fixing Long Annotations with Interface](#3-fixing-long-annotations-with-interface)
  - [4. Syntax Around Interfaces](#4-syntax-around-interfaces)
  - [5. Functions in Interfaces](#5-functions-in-interfaces)
  - [6. Code Reuse with Interfaces](#6-code-reuse-with-interfaces)
  - [7. General Plan with Interfaces](#7-general-plan-with-interfaces)
    - [재사용 가능한 코드 in TS](#재사용-가능한-코드-in-ts)

# Section 7

## 1. Interfaces

### 인터페이스란?

인터페이스는 새로운 타입을 만드는 것으로, 객체 프로퍼티의 이름과 값의 타입을 생성한다.

<br/>

## 2. Long Type Annotations

```ts
const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};
printVehicle(oldCivic);
```

매개 변수 vehicle에 어노테이션 된 타입이 너무 길어 가독성이 떨어진다.
만약 프로퍼티가 늘어 난다면? ➡️ 코드를 읽기 더 어려울 것

<br/>

## 3. Fixing Long Annotations with Interface

인터페이스를 사용하면 위의 코드를 리팩토링할 수 있다.

```ts
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic: Vehicle = {
  name: "civic",
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  // ...
};
printVehicle(oldCivic);
```

Vehicle이라는 인터페이스를 선언하고 매개 변수에 어노테이션 해준다.

> ✨ 인터페이스를 사용해 타입을 어노테이션하면 가독성을 높이고 유지보수 측면에서도 좋다.

<br/>

## 4. Syntax Around Interfaces

인터페이스는 어떤 타입이든 선언할 수 있다. ➡️ 함수도 가능

```ts
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
printVehicle(oldCivic);
```

<br/>

## 5. Functions in Interfaces

## 6. Code Reuse with Interfaces

## 7. General Plan with Interfaces

### 재사용 가능한 코드 in TS

- 인터페이스로 타입 선언된 인자를 받는 함수를 만든다.
- 객체는 주어진 인터페이스를 구현해 함수와 함께 작동하도록 결정한다.
