import React, { useState } from 'react'

const Button = () => {
    //defining the hook for initializing our work
    const [click, setClick] = useState(0); 
  return (
    <div>
        <button onClick={() => setClick(click + 1)}>Click me!</button>
        <p>You clicked the button {click} times</p>
    </div>
  )
}

export default Button