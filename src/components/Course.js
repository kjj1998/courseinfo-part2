import React from 'react'

const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
  const Total = ({ parts }) => {
    const total = parts.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.exercises
    }, 0)
  
    return(
      <p><b>total of {total} exercises</b></p>
    ) 
  }
  
  const Part = ({name, exercises}) => {
  
    return (
      <p>
        {name} {exercises}
      </p>    
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
          {parts.map(part =>
            <Part key={part.id} name={part.name} exercises={part.exercises} />
          )}
      </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course