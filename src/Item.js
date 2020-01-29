import React, { useState } from 'react'
import styled from 'styled-components'

const Item = ({ id, text, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)
    const btnStatus = isDone ? '未完了に戻す' : '完了！'
    const handleDelete = () => {
        deleteTodo(id)
    }
    return (
        <ItemWrapper>
            <p>{`${id}: ${text}`}</p>
            <button onClick={() => setIsDone(!isDone)}>
                {btnStatus}
            </button>
            <button onClick={handleDelete}>削除</button>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.li`
    background-color: gray;
`

export default Item
