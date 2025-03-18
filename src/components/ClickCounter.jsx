import React from 'react'
import {useState} from "react"

function ClickCounter() {
/* useState */
const [count, setCount] = useState(0);

  return (
    <div>
        <div className="container">
            <p>Du har klickat {count} gånger.</p>
            <button className='btn' onClick={() => setCount(count + 1)}>
                Klicka
            </button>
        </div>

    </div>

  )
}

export default ClickCounter
