import React, { useRef, useState } from 'react'

const Buttoncounter = () => {
/* 
USING STATES 
*/
    console.log("Component Mounts");
    const [counter, setCounter] = useState(0);

    console.log("VAL", counter);
    const incrementCounter = () => {
        setCounter(counter+1);
        console.log("VAL AFTER INCREMENT", counter);
    }
  return (
    <div>
      <h1 style={{color: "red"}}>BUTTON COUNTER</h1>
      <h1>Counter Value: {counter}</h1>
      <button onMouseOver={incrementCounter} onClick={incrementCounter}>Hover/Click me</button>
    </div>
  )

/*
USING REFS
*/
// const countRef = useRef(0);
// const [forceUpdateFlag, setForceUpdateFlag] = useState(0);

// const forceUpdate = () => {
//     setForceUpdateFlag(Math.random());
// }

// const incrementCounter = () => {
//     countRef.current+=1;
//     forceUpdate();
// }
// return (
//         <div>
//           <h1>Counter Value: {countRef.current}</h1>
//           <button onMouseOver={incrementCounter} onClick={incrementCounter}>Hover/Click me</button>
//         </div>
//       )
}

export default Buttoncounter
