import React from 'react'
import Item from './Item';

const ShowTodoList = (props:any) => {
    return (
        <>
            {props.todoList.flatMap((item:any) => {
                    switch (props.filter) {
                        case "all":
                            return (
                                <Item
                                    key={item.id}
                                    item={item}
                                    finishTodo={props.finishTodo}
                                    deleteTodo={props.deleteTodo}
                                    updateTodo={props.updateTodo}
                                />
                            );
                        case "finish":
                            if (item.isFinished) {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        finishTodo={props.finishTodo}
                                        deleteTodo={props.deleteTodo}
                                        updateTodo={props.updateTodo}
                                    />
                                );
                            } else {
                                return;
                            }
                        case "now":
                            if (!item.isFinished) {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        finishTodo={props.finishTodo}
                                        deleteTodo={props.deleteTodo}
                                        updateTodo={props.updateTodo}
                                    />
                                );
                            } else {
                                return;
                            }
                        case "trash":
                            if (item.isDeleted) {
                                return (
                                    <Item
                                        key={item.id}
                                        item={item}
                                        finishTodo={props.finishTodo}
                                        deleteTodo={props.deleteTodo}
                                        updateTodo={props.updateTodo}
                                    />
                                );
                            } else {
                                return;
                            }
                    }
            })}
        </>
    )
}

export default ShowTodoList