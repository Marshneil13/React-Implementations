import React from 'react'

const Card = ({todos}) => {
  return (
    <div className='card-container'>
      {
        todos.map(todo => <p>{todo.title}</p>)
      }
    </div>
  )
}

export default Card
