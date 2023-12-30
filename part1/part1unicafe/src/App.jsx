import { useState } from 'react'

// Make a Statistics component
const Statistics = (props) => {

  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <table>
    <tr>
      <td><StatisticsLine text="good"/></td>
      <td><StatisticsLine value={props.good}/></td>
    </tr>
    <tr>
      <td><StatisticsLine text="neutral"/></td>
      <td><StatisticsLine value={props.neutral}/></td>
    </tr>
    <tr>
      <td><StatisticsLine text="bad"/></td>
      <td><StatisticsLine value={props.bad}/></td>      
    </tr>
    <tr>
      <td><StatisticsLine text="all"/></td>
      <td><StatisticsLine value={props.total}/></td>         
    </tr>
    <tr>
      <td><StatisticsLine text="average"/></td>
      <td><StatisticsLine value={props.average}/></td>         
    </tr>
    <tr>
      <td><StatisticsLine text="positive"/></td>
      <td><StatisticsLine value={props.positive}/></td>         
    </tr>
    </table>
  )
}

const StatisticsLine = (props) => (
  <div>{props.text} {props.value}</div>
)

// Make a Button component
const Button = (props) => (
    <button onClick = {props.handleClick}>
      {props.text}
    </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = good/(total) * 100

  const handleGood = newGood => {
    setGood(newGood)
  }
  const handleNeutral = newNeutral => {
    setNeutral(newNeutral)
  }
  const handleBad = newBad => {
    setBad(newBad)
  }

  return (
    <div>
        <h2>give feedback</h2>
        <Button handleClick={() => handleGood(good+1)} text="good" />
        <Button handleClick={() => handleNeutral(neutral+1)} text="neutral" />
        <Button handleClick={() => handleBad(bad+1)} text="bad" />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App