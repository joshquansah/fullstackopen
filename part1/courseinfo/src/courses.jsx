const Header = ({course}) =>{
  return (
    <>
    <h2>{course.name}</h2>
    </>
  )
}

const Content = ({part}) => 
  <div>
    <p>
    {part.name} {part.exercises}
    </p>
  </div>

const Total = ({parts}) => {
  console.log(parts)
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <>
    <h4>total of {totalExercises} exercises</h4>
    </>
  )
}
const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      
      {course.parts.map(part => 
      <Content key={part.id} part = {part} />
      )}
      <Total parts = {course.parts} />
    </div>
    
  )
}
export default Course