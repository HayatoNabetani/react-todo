import React from 'react'

const CreateTodo = (props:any) => {
    return (
        <>
            <input type="text" value={ props.todoContent } onChange={(e) => props.createTodoContent(e)}/>
            <button onClick={() => props.createTodoList()}>追加</button>
        </>
    )
}

export default CreateTodo