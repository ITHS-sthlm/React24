import React from 'react';
import { useState } from 'react';

function TodoList() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const addItem = () => {
        if (input.trim()) {
            setItems([...items, input]);
            setInput('');
        }
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Lägg till en uppgift"
                className="input"
            />
            <button onClick={addItem} className="btn">
                Lägg till
            </button>
            <ul className="list">
                {items.map((item, index)=>(
                    <li key={index} className='list-item'>{index}{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
