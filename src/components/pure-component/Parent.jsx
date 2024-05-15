import React from 'react'
import PureComponent from './PureComponent'

const Parent = ({id, age, salary}) => {
    console.log("Parent Component rendered");
  return (
    <div>
      <h1>Id: {id}</h1>
      <PureComponent age={age} salary={salary}/>
    </div>
  )
}

export default Parent
