**TOC**

- [useReducer](#usereducer)
  - [Reducer](#reducer)
  - [기본 문법](#기본-문법)
    - [파라미터](#파라미터)
    - [반환 값](#반환-값)
    - [dispatch 함수](#dispatch-함수)
      - [파라미터](#파라미터-1)
      - [반환 값](#반환-값-1)
  - [사용법](#사용법)
    - [❗ 주의할 점](#-주의할-점)
  - [useState vs useReducer](#usestate-vs-usereducer)
    - [코드 사이즈](#코드-사이즈)
    - [가독성](#가독성)
    - [언제 사용해야 할까?](#언제-사용해야-할까)
  - [TL;DR](#tldr)

# useReducer

[useReducer](https://beta.reactjs.org/reference/react/useReducer)는 컴포넌트에 [reducer](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer)를 추가해주는 훅이다.

## Reducer

그렇다면 `reducer`란 무엇일까?

컴포넌트에 많은 state들이 있고 그 state를 업데이트할 핸들러 함수들이 즐비한다면, 아마 우리는 버틸 수 없을 것이다. 이런 문제점을 해결하기 위해 state를 업데이트하는 로직을 분리할 수 있게 해주는 것이 reducer 함수이다.

> ✨ 로직을 단순히 컴포넌트 밖으로 분리할 수 있고, 아예 다른 파일로도 분리할 수 있다.

<br/>

## 기본 문법

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

먼저 컴포넌트 최상단에 훅을 불러온다. 이때, reducer를 사용해 컴포넌트의 상태를 관리한다.

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  // ...
}

const Component = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
};
```

### 파라미터

useReducer reducer, initialArg, init 세 가지 파라미터를 갖는다.

- reducer : 상태를 업데이트하는 함수이다. 순수해야 하고 다음 상태를 반환해야 함
- initialArg : 초기 상태 ➡️ initialState
- init : 초기화하는 함수로 옵셔널 하다.

### 반환 값

useReducer는 두 가지 값을 갖는 배열을 반환한다.

- state : 현재 상태 값으로 첫 번째 렌더링 시 initialState로 설정한다.
- dispatch : 상태를 업데이트해 주는 함수 ➡️ 리렌더링의 트리거가 됨

### dispatch 함수

상태를 업데이트해 주는 함수로 인자로 action을 넘겨 줘야 한다.

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });

const handleClick = () => dispatch({ type: "INCREMENT" });
```

#### 파라미터

- action : action은 유저에 의해 실행된다. 어떤한 타입의 값도 될 수 있다. 보통 컨벤션으로 `{ type: "do something" }` 객체를 사용한다. 옵셔널 하게 다른 프로퍼티(payload)도 추가할 수 있다.

#### 반환 값

반환 값 없음

<br/>

## 사용법

1. useReducer 훅을 컴포넌트 상단에 불러온다.

```jsx
import { useReducer } from "react";
```

<br/>

2. initialState를 선언하고 reducer 함수를 생성한다.

```jsx
// ...

const ACTION_TYPE = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  INCREMENTWITHVALUE: "incrementWithValue",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { count: state.count + 1 };
    case ACTION_TYPE.DECREMENT:
      return { count: state.count - 1 };
    case ACTION_TYPE.RESET:
      return { count: (state.count = 0) };
    case ACTION_TYPE.INCREMENTWITHVALUE:
      return { count: state.count + action.payload };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

// ...
```

> ✨ 이때 action 타입을 문자열로 하드코딩하는 것보다, 객체를 사용하면 코드 관리가 더 수월하다.

<br/>

3. 컴포넌트 안에서 useReducer 훅을 사용한다.

```jsx
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

// ...
```

<br/>

4. 반환된 dispatch 함수를 이용해 상태를 업데이트해준다.

```jsx
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>{state.count}</p>
      <br />

      <button onClick={() => dispatch({ type: ACTION_TYPE.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.RESET })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPE.DECREMENT })}>
        -
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTION_TYPE.INCREMENTWITHVALUE, payload: 5 })
        }
      >
        + with value
      </button>
    </div>
  );
}
```

<br/>

### ❗ 주의할 점

state는 `read-only`하다. 그러므로 객체나 배열을 수정하면 안 된다.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:

      // 객체를 아래와 같이 mutate ❌
      return { count: state.count + 1 };

// ...
```

대신에 항상 새로운 객체를 반환해 준다.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:

      // 새로운 객체를 리턴 ✅
      return { ...state ,count: state.count + 1 };

// ...
```

<br/>

## useState vs useReducer

### 코드 사이즈

useState는 적은 코드량을 가지고 있다. useReducer는 reducer 함수와 dispatch 두 개의 코드를 작성해야 한다.

하지만 useReducer는 상태를 업데이트하는 로직이 많을 시 코드를 줄이고 가독성을 높여준다.

### 가독성

useState는 상태가 복잡하지 않을 경우 매우 높은 가독성을 자랑한다. 하지만 복잡해질 수 록 읽기 어려워진다.

useReducer는 상태를 업데이트하는 로직과 핸들러 함수를 분리하여 가독성을 높인다.

### 언제 사용해야 할까?

- useState

  - state가 1개
  - state가 단순한 문자, 숫자, boolean 형태일 경우

- useReducer

  - state가 여러 개
  - 앱의 규모가 클 경우
  - state가 복잡해질 때

<br/>

## TL;DR

1. useReducer는 상태를 관리하는 함수인 reducer와 initialState를 파라미터로 받는 상태 관리 훅이다
2. 상태를 업데이트해주기 위해 useReducer에서 반환된 dispatch 함수를 이용한다.
3. 상태는 `read-only` 해야 하므로 항상 새로운 객체를 반환해 준다.
