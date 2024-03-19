import React, { useReducer, useState } from 'react'

interface contextState{
  count: number
}

type contextAction = { type: "reset" } |{ type: "setCount"; value: contextState["count"]}



const stateReducer = (state: contextState,action: contextAction)=>{
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

const initialState ={
  count: 0
}

export default function Fifth(){
const [state, dispatch] = useReducer(stateReducer, initialState);
const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Welcome to my counter</h1>

      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
