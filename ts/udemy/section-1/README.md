# Section 1

- [Section 1](#section-1)
  - [1. Typescript Overview](#1-typescript-overview)
      - [타입스크립트의 타입 시스템](#타입스크립트의-타입-시스템)
      - [타입스크립트의 실행 환경](#타입스크립트의-실행-환경)
  - [2. Environment Setup](#2-environment-setup)
  - [3. First App](#3-first-app)
      - [flow](#flow)
  - [4. Catching Errors With TS](#4-catching-errors-with-ts)
      - [interface 선언](#interface-선언)
      - [More Errors](#more-errors)

## 1. Typescript Overview

타입스크립트는 자바스크립트의 코드로 동작하는 언어이다.

타입스크립트는 타입 시스템이라는 문법을 통해 코드를 핸들링한다. ➡️ 타입스크립트의 전부

#### 타입스크립트의 타입 시스템

1. 개발 환경에서 에러를 잡아냄 ➡️ 자바스크립트의 경우 에러를 잡기 위해선 런타임에 실행이 필수
2. 타입 어노테이션을 통한 코드 분석
3. 타입스크립트는 오직 개발 환경에서만 작동 ➡️ 타입스크립트를 컴파일 한 후 자바스크립트로 실행
4. 성능 최적화를 제공 ❌

#### 타입스크립트의 실행 환경

1. 자바스크립트 + 타입 어노테이션
2. 컴파일
3. 컴파일된 자바스크립트 실행 ➡️ 브라우저 or Node.js

> ✨ 우리는 타입스크립트를 실행하는 것이 아닌 자바스크립트를 실행하는 것

> ✨ 타입스크립트는 우리의 코드의 에러를 잡는 도우미라고 생각하면 편하다

<br/>

## 2. Environment Setup

```bash
npm i -g typescript ts-node
```

typescript 와 ts-node를 설치해준다.

- ts-node : ts-node는 타입스크립트를 노드 환경에서 실행할 수 있도록 해주는 패키지
- tsc : tsc는 타입스크립트 컴파일러

<br/>

## 3. First App

#### flow

1. Fetch data from [api](https://jsonplaceholder.typicode.com/)
2. Create a new project
3. Install axios to make a request
4. Write code

```ts
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(URL).then((res) => {
  console.log(res.data);
});
```

```bash
tsc index.ts
```

```js
"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(URL).then(function (res) {
  console.log(res.data);
});
```

위와 같이 컴파일 후 Node 환경에서 실행해도 되지만, ts-node를 이용하면 좀 더 간편하다

```bash
ts-node index.ts
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

<br/>

## 4. Catching Errors With TS

#### interface 선언

```ts
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`Todo id: ${id} 
     Has a title of ${title}
     Is it completed? ${completed}
    `);
});
```

interface를 통해 타입 지정한 후 실행하면, 에러 핸들링을 할 수 있다.

> ✨ 타입스크립트를 이용하면 개발 환경에서 에러를 잡을 수 있다!

#### More Errors

```ts
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`Todo id: ${id} 
  Has a title of ${title}
  Is it completed? ${completed}
 `);
};
```
