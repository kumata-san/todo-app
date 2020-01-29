import React from 'react';
import Item from './Item'

const List = ({ todos, deleteTodo }) => {
    return (
        <div>
            <ul>
                {todos.map((todo, i) => {
                    return (
                        <Item
                            key={i}
                            id={todo._id}
                            text={todo.text}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default List
