import { useReducer } from "react";

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
      return { ...state, count: state.count + 1 };
    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTION_TYPE.RESET:
      return { ...state, count: (state.count = 0) };
    case ACTION_TYPE.INCREMENTWITHVALUE:
      return { ...state, count: state.count + action.payload };

    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

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

export default App;
