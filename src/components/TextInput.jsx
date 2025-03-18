import React from 'react'
import { useState } from 'react'

function TextInput() {
    const [text, setText] = useState("Hej")
  return (
    <div className='container'>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}  />
        <p>Du skrev: {text}</p>
    </div>
  )
}

export default TextInput
