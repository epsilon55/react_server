import React from 'react'

const Header = ({ name }) => (<h1>{name}</h1>)
  
const Content = ({ parts }) => parts.map(element =>(
    <div key={element.id}>
        <p>{element.name} {element.exercises}</p>
    </div>
))
const Total = ({ parts }) => {
    const total = parts.reduce((sum, current) => sum + current.exercises, 0)
    return (
        <div>
            <p><b>Total of {total} exercises</b></p>
        </div>
    )
}
const Course = ({ course }) => {
    console.log(course.name)
    console.log(course.parts)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export { Course, Header }