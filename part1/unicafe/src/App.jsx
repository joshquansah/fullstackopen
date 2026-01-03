import { useState } from 'react'
const Button = ({onClick, text}) => {
return (
<button onClick = {onClick}> {text} </button>
)
}
const StatisticLine = ({text, count}) => {
  return(
    <p>{text} {count}</p>
  )
}
const Statistics = ({gCount, nCount, bCount, tCount, aCount, pCount}) => {
  if (tCount === 0){
    return <>
    <h1>statistics</h1>
    <p>No feedback given</p>
    </>
  }
  else{  
  return(
    <div>
    <h1>statistics</h1>
      <StatisticLine text = "good" count={gCount} />
      <StatisticLine text = "neutral" count={nCount} />
      <StatisticLine text = "bad" count={bCount} />
      <StatisticLine text = "total" count={tCount} />
      <StatisticLine text = "average" count = {aCount} />
      <StatisticLine text = "positive" count = {pCount} />
  </div>
  )
}
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const goodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    setTotal(total + 1)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }
  const averageCalc = (good, bad, total) => {
    const sum = (good * 1) - (bad * 1)
  return sum / (total)
  }
  const positives = (good, total) => {
    return ((good / total) * 100 + '%')
  }
  return (
    <div>
      <h1> give feedback </h1>
      <Button onClick = {goodClick} text = 'good' />
      <Button onClick = {neutralClick} text = 'neutral' />
      <Button onClick = {badClick} text = 'bad' />
      <Statistics gCount = {good} nCount = {neutral} bCount = {bad} tCount = {total} aCount = {averageCalc(good, bad, total)} pCount = {positives(good, total)} />
      

    </div>
  )
}

export default App