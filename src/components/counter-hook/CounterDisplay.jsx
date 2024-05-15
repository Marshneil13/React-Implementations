import React from 'react'
import useCounter from '../../hooks/UseCounter'

const CounterDisplay = () => {
    const {count, increment, decrement, reset} = useCounter(0);
  return (
    <div>
      <h1 style={{color: "red"}}>CUSTOM HOOK USECOUNTER</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default CounterDisplay
