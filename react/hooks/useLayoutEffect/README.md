# useLayoutEffect

- [useLayoutEffect](#uselayouteffect)
  - [useEffect와 useLayoutEffect의 차이](#useeffect와-uselayouteffect의-차이)
  - [언제 사용해야 하는가?](#언제-사용해야-하는가)
  - [TL;DR](#tldr)

## useEffect와 useLayoutEffect의 차이

두 훅은 동일한 문법을 가지고 사용한다.

```jsx
// useEffect
useEffect(() => {
  effect;
  return () => {
    cleanup function
  };
});

// useLayoutEffect
useLayoutEffect(() => {
  effect;
  return () => {
    cleanup function
  };
});
```

useEffect와 useLayoutEffect는 그 코드의 실행이 동기적이냐 비동기적이냐에 따라 나눌 수 있다.

- #### useEffect

  useEffect는 비동기적으로 코드가 실행되는데, 이때 사진과 같이 paint 된 후 실행된다.
  useEffect 안에서 DOM을 변경하는 코드가 있을 경우 사용자들은 화면 깜빡임을 느낄 수 있다.

  render ➡️ print ➡️ effect 순으로 실행된다.

<p align="center">
  <img src="https://miro.medium.com/max/640/1*Q5DfWHYDNQdfnal-IvW05g.webp" alt="useEffect" />
</p>

- #### useLayoutEffect

  useLayoutEffect는 동기적으로 코드가 실행되는데, paint 되기 직전에 실행된다.
  useEffect와 달리 paint 되기 전에 실행이 되어 화면의 깜빡임은 없지만, 동기적으로 실행이 되기 때문에 복잡한 로직이 있을 경우 사용자들은 빈 화면을 볼 수 있다.

  render ➡️ effect runs ➡️ print 순으로 실행된다.

<p align="center">
  <img src="https://miro.medium.com/max/640/1*ZmRLve6CMNAuaQ5EFUa-8g.webp" alt="useEffect" />
</p>

<br/>

## 언제 사용해야 하는가?

- DOM에서 레이아웃을 다 읽고 동기적으로 리렌더링하는 경우
- DOM을 측정할 경우 (스크롤의 위치)

> ✨ 우리의 코드는 브라우저를 막지 않기에 유저들은 금방 업데이트를 볼 수 있다. 그러니 대부분의 경우 useEffect를 이용하자!

## TL;DR

1. useEffect의 경우 비동기적으로 코드가 실행되고, paint 된 후 실행된다.
2. useLayoutEffect의 경우 동기적으로 코드가 실행되고, paint 직전에 실행된다.
3. 언제 사용하는지? ➡️ 동기적으로 리렌더링을 하고 싶은 경우, DOM을 측정할 경우

---

[출처](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)

[사진 출처](https://pubudu2013101.medium.com/what-is-the-real-difference-between-react-useeffect-and-uselayouteffect-51723096dc19)
