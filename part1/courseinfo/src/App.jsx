const Header = ({course}) =>{
  return (
    <>
    <h1>{course.name}</h1>
    </>
  )
}

const Content = ({course}) => 
  <div>
    <p>
    {course.name} {course.exercises}
    </p>
  </div>

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      
      {course.parts.map(part => 
      <Content key={part.id} course = {part} />
      )}
      
    </div>
    
  )
}
const Total = ({parts}) => {
  console.log(parts)
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
    <p>Number of exercises {totalExercises}</p>
    </>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
      <Total parts = {course.parts} />
    </div>
  )
}

export default App