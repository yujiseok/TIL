**TOC**

- [Section 5](#section-5)
  - [1. Arrays in TypeScript](#1-arrays-in-typescript)
  - [2. Why Typed Arrays](#2-why-typed-arrays)
  - [3. Multiple Types in Arrays](#3-multiple-types-in-arrays)
  - [4. When to Use Typed Arrays](#4-when-to-use-typed-arrays)

# Section 5

## 1. Arrays in TypeScript

타입스크립트에서 배열의 자바스크립트의 배열과 동일하게 동작한다.

하지만 타입스크립트의 배열은 정확히 하나의 타입을 가진 배열이다.
즉 문자열로 된 배열에 숫자를 넣으면 에러를 반환한다.

```ts
const carMakers: string[] = ["Hyundai", "Kia", "Audi"]; // string[]
const dates = [new Date(), new Date()];

const carsByMake = [["Sonata"], ["K8"], ["Q4"]]; // string[][]
```

<br/>

## 2. Why Typed Arrays

1. 배열에서 값을 추출할 때 타입 추론을 가능하게 해줌

```ts
// Help with inference when extracting values
const car = carMakers[0]; // string
const myCar = carMakers.pop(); // string
```

2. 타입과 맞지않는 값을 추가하는 것을 막아줌

```ts
// Prevent incompatible values
carMakers.push(100);
```

3. map, forEach, reduce 함수에서 도움을 받을 수 있음

```ts
// Help with map, forEach and reduce ...
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase(); // IDE 인텔리센스
});
```

4. 유동적으로 - 배열은 다양한 타입을 가질 수 있다.

<br/>

## 3. Multiple Types in Arrays

```ts
// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-01-01"]; // (string | Date)[]
importantDates.push("내일");
importantDates.push(new Date());
```

`|` 연산자를 사용하면 여러개의 타입을 가질 수 있다.

<br/>

## 4. When to Use Typed Arrays

언제나 우리가 배열을 사용하고 싶을 때
