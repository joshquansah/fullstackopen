const Header = (props) =>{
  console.log(props)
  return (
    <>
    <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) => {
  console.log(props)
  return(
    <p>
        {props.name} {props.number}
      </p>
  )
}
const Content = (props) => {
  console.log(props)
  return(
    <>
    <Part name = {props.part1} number = {props.exercises1} />
    <Part name = {props.part2} number = {props.exercises2} />
    <Part name = {props.part3} number = {props.exercises3} />
      </>
  )
}
const Total = (props) => {
  console.log(props)
  return (
    <>
    <p>Number of exercises {props.exercises + props.exercises2 + props.exercises3}</p>
    </>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [ 
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {parts[0].name} exercises1 = {parts[0].exercises} part2 = {parts[1].name} exercises2 = {parts[1].exercises} part3 = {parts[2].name} exercises3 = {parts[2].exercises} />
      <Total exercises = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises} />
    </div>
  )
}

export default App