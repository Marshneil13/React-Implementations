import React from 'react'

const PureComponent = ({age, salary}) => {
    console.log("Pure Component rendered");
  return (
    <div>
      <h1>Age: {age}</h1>
      <h1>Salary: {salary}</h1>
    </div>
  )
}

export default React.memo(PureComponent)
