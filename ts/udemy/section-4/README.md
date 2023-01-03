# Section 4

## 1. More on Annotations Around Functions

#### Type annotations for functions

- 타입스크립트에게 함수의 인자로 무엇을 받는 지와 리턴 타입을 알려주는 것이다.
  > ✨ 함수 자체에 어노테이션

#### Type inference for functions

- 타입스크립트가 자동으로 함수의 리턴을 추론하는 것
  > ✨ 오직 리턴 값만 타입 추론함

```ts
// 타입을 어노테이션 하지 않으면 타입스크립트는 파라미터 a, b가 무슨 타입인지 알 수 없다.
// any 타입을 반환 ➡️ number 타입을 명시해준다.
// return 타입을 명시해준다.
const add = (a: number, b: number): number => {
  return a + b;
};
```

<br/>

## 2. Inference Around Functions

타입스크립트는 타입을 검사할 뿐, 함수 자체의 로직은 검사하지 않는다.

```ts
// 타입을 어노테이션 하지 않으면 타입스크립트는 파라미터 a, b가 무슨 타입인지 알 수 없음
// any 타입을 반환 ➡️ number 타입을 명시해 준다.
// return 타입을 명시해 준다.
const add = (a: number, b: number) => {
  return a + b;
};
```

우리가 리턴 타입을 명시하지 않아도, 타입스크립트가 알아서 함수의 몸체를 읽으며 리턴 타입을 추론한다.

```ts
// 리턴을 타입 명시하면 아래의 함수처럼 실수하는 것을 방지해 줌
const subtract = (a: number, b: number): number => {
  a - b; // A function whose declared type is neither 'void' nor 'any' must return a value.
};
```

> ✨ 하지만 리턴 타입을 명시해 주는 것이 실수와 에러를 막는 좋은 방법이므로 명시해 주자!

<br/>

## 3. Void and Never

#### void

- void 타입은 리턴 값이 없을 때 경우 사용한다.

```ts
const logger = (message: string): void => {
  // return 값이 없음
  console.log(message);
};
```

#### never

- never 타입은 리턴에 절대로 도달하면 안될 경우에 사용한다.

```ts
const throwError = (message: string): never => {
  // return 값이 없음
  throw new Error(message);
};
```

<br/>

## 4. Destructuring with Annotations

```ts
const todaysWeather = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
```

ES6(ES2015)에 추가된 구조분해할당을 이용하면 좀 더 가독성이 높게 코드를 작성할 수 있다.

<br/>

## 5. Annotations Around Objects

```ts
const profile = {
  name: "지석",
  age: 123,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
```
