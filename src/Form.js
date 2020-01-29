import React, { useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('');
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                addTodo(value)
                setValue('')
            }}>
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                 />
            </form>
            <button type="submit">追加</button>
        </div>
    )
}

export default Form
