import { useState } from 'react'

function Counter() {

  let [Count,setCount]=useState(0)
  let updateCount =()=>{setCount(Count+1)}
  return (
    <div>
      <h1>Counter:{Count}</h1>
      <button onClick={updateCount}>update</button>
    </div>
  )
}

export default Counter