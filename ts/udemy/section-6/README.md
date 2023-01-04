**TOC**

- [Section 6](#section-6)
  - [Tuples in TypeScript](#tuples-in-typescript)
  - [Tuples in Action](#tuples-in-action)
  - [Why Tuples](#why-tuples)

# Section 6

## Tuples in TypeScript

Tuple : 배열과 유사한 구조를 가진 타입 ➡️ 각 요소들은 레코드의 프로퍼티를 나타냄

<br/>

## Tuples in Action

```ts
// Type alias
type Drink = [string, boolean, number];

const drinkTuple: Drink = ["brown", true, 40];
drinkTuple[0] = true; // Type 'boolean' is not assignable to type 'string'.
```

tuple은 `[ type ]`을 사용해 어노테이션한다.

<br/>

## Why Tuples

```ts
const carSpecs: [number, number] = [400, 3354]; // tuple을 사용하면 데이터가 무엇인지 파악하기 어려움

// 반면 객체는 데이터가 무엇인지 파악하기 쉬움
const carStats = {
  horsepower: 400,
  weight: 3354,
};
```

tuple을 이용하면 코드의 의도를 파악하기 어렵다.
