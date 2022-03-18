import React from 'react'

const Item = (props: any) => {
    const id = props.key;
    const item = props.item;
    console.log(item.id);
    //Item: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop.
    // あまりよろしくないのかな？
    return (
        <>
            <li key={id}>
                <input
                    type="checkbox"
                    onChange={(e) => props.finishTodo(e,id)}
                    checked={item.isFinished}
                />
                <input
                    type="text"
                    value={item.content}
                    onChange={(e) => props.updateTodo(e,id)}
                />
                <span>{item.createdAt}</span>
                <span>{item.updatedAt}</span>
                <button onClick={() => props.deleteTodo(id)}>削除</button>
            </li>
        </>
    );
}

export default Item