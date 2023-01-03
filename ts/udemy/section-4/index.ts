// 타입을 어노테이션 하지 않으면 타입스크립트는 파라미터 a, b가 무슨 타입인지 알 수 없음
// any 타입을 반환 ➡️ number 타입을 명시해 준다.
// return 타입을 명시해 준다.
const add = (a: number, b: number) => {
  return a + b;
};

// 우리가 리턴 타입을 명시하지 않아도, 타입스크립트가 알아서 함수의 몸체를 읽으며 리턴 타입을 추론한다.
// 리턴 타입에 추론이 적용된다. ➡️ 리턴 타입을 명시하지 않아도 됨 하지만 명시하는 것이 좋다.

// 아래의 함수처럼 실수하는 것을 방지해 줌
const subtract = (a: number, b: number): number => {
  return a - b; // A function whose declared type is neither 'void' nor 'any' must return a value.
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void는 리턴 값이 없을 때 사용한다.
const logger = (message: string): void => {
  // return 값이 없음
  console.log(message);
};

// never 리턴에 절대로 도달하면 안될 때 사용한다.
const throwError = (message: string): never => {
  // return 값이 없음
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

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
