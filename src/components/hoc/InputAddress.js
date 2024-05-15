import React from 'react'
import HOComponent from './HOComponent';

const InputAddress = (props) => {
    const {text, displayText} = props;
  return (
    <div>
      <label>Address</label>
      <input type='text' id='address' value={text} onChange={(e) => displayText(e.target.value)}/>
      <h2>I live in {text}</h2>
    </div>
  )
}

export default HOComponent(InputAddress)
