import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const points = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [voteClicks, setVotes] = useState(points)

  const randSelect = newSelected => (
    setSelected(Math.floor(Math.random() * (newSelected)))
  )

  const handleVotes = newVote => {
    const copy = [...newVote]
    copy[selected] += 1
    setVotes(copy)
  }
  
  let maxVal = Math.max(...voteClicks)
  let maxIndex = voteClicks.indexOf(maxVal)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {voteClicks[selected]} votes</div>
      <div>
        <Button handleClick={()=>handleVotes(voteClicks)} text="vote"/>
        <Button handleClick={()=>randSelect(anecdotes.length)} text="next anecdote"/>
      </div>
      <h2>Anecdote with the most votes</h2>
      <div>{anecdotes[maxIndex]}</div>
      <div>has {maxVal} votes</div>
    </div>
  )
}

export default App