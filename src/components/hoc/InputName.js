import React from 'react'
import HOComponent from './HOComponent'

const InputName = (props) => {
  const {text, displayText} = props;
  return (
    <div>
      <label>Name</label>
      <input type='text' id='name' value={text} onChange={displayText}/>
      <h1>Hello my name is {text}</h1>
    </div>
  )
}

export default HOComponent(InputName)
