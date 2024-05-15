import React, { useState } from 'react'

const HOComponent = (InputComponent) => {
  return function EnhancedComponent(props){
    const [text, setText] = useState(0);
    return <EnhancedComponent {...props} text={text} displayText = {() => setText(text+1)}/>
  }
}

export default HOComponent
