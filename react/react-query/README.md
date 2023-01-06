# React-Query

## React-Query vs Axios

- 둘중 하나를 고를 필요가 없다.
- 둘은 같이 사용되고 axios는 리액트 쿼리의 보너스 같은 존재

## [React-Query vs Redux](https://react-query-v3.tanstack.com/guides/does-this-replace-client-state#_top)

- 리액트 쿼리 : 리액트 쿼리는 server-state 라이브러리
- Redux, MobX, Zustand : client-state 라이브러리, (RTK-query 제외)

---

무엇
React-Query는 데이터 페칭 라이브러리이다.

왜

1. 리액트는 ui 라이브러리이기 때문에 데이터 페칭에 패턴이 없음
2. useState와 useEffect를 사용해 데이터를 페칭하고 상태를 관리함
3. 전체 앱에 데이터가 필요하면 상태관리 라이브러리를 사용해야함
4. 대부분의 상태관리 라이브러리는 client 상태에 최적화됨
5. 상태관리 라이브러리들은 비동기에 적합하지 않음

client state vs server state

- client state : 동기적으로 업데이트됨
- server state
  - 비동기적으로 업데이트 되며 앱에서 관리가 안됨
  - 데이터가 항상 업데이트 되며, 싱크를 맞추기 어려움
  - 캐싱, 데이터 중복, 최적화에 어려움
