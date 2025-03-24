import React, { useState } from 'react';

function TextInput(props) {
    const [text, setText] = useState("Hej");

    return (
        <div className='container'>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p id={props.name}>Du skrev: {text}</p>
        </div>
    );
}

export default TextInput;
