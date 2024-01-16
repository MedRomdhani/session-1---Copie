import {useState} from 'react'
const Counter = () => {

let  [count, setCount] = useState(0)

const increment = () => {
  setCount((prev) => {
    console.log(prev)
    return (count + 1)
  } )
}
  return (
    <>

<h2>My counter</h2>
<div>{count}</div>
<button className='btn btn-success' onClick={increment}>incrment</button>
    </>
  )
}

export default Counter