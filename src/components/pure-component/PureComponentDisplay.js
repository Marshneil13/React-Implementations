import React, { useEffect, useState } from 'react'
import Parent from './Parent';

const PureComponentDisplay = () => {
    const [id, setId] = useState(1);
    const [age, setAge] = useState(24);
    const [salary, setSalary] = useState("$250,000");

    useEffect(() => {
      setInterval(() => {
        console.log("UseEffect Triggered");
        setId(id+1);
      }, 2000);
    })
    
  return (
    <div>
      <h1 style={{color: "red"}}>PURE COMPONENT EXAMPLE</h1>
      <Parent id={id} age={age} salary={salary}/>
    </div>
  )
}

export default PureComponentDisplay
