
// export default App
import { useState } from "react"
import "./App.css"

function App(){
  const [counter,setCounter] = useState(10)
  const addValue =() =>{
  setCounter(prevCounter => prevCounter + 1)

  }
  const removeValue =()=>{
    setCounter(counter -1 )
  }
  return(
    <>
    <h1>Chai aur react</h1>
    <h2>Couter value: {counter}</h2>
    <button onClick ={addValue}>
      Add value {counter}
    </button >
    <button onClick={removeValue}>
      remove value  {counter}
    </button>
    <p>footer: {counter}</p>
    </>
  )
}
export default App