import React, { useState, useEffect } from "react";

const Todo = () => {
    const [todoContent, setTodoContent] = useState("");
    const [todoList, setTodoList] = useState([
        {
            id: 0,
            content: "test1",
            createdAt: "2021/11/20",
            updatedAt: "2022/11/21",
            isFinished: false,
            isDeleted: false,
        },
        {
            id: 1,
            content: "test2",
            updatedAt: "2022/11/21",
            createdAt: "",
            isFinished: false,
            isDeleted: false,
        },
        {
            id: 2,
            content: "test3",
            createdAt: "",
            updatedAt: "2022/11/21",
            isFinished: true,
            isDeleted: false,
        },
    ]);
    const createTodoContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoContent(e.target.value);
    }

    const createTodoList = () => {
        const date = new Date();
        const Y = date.getFullYear();
        const M = date.getMonth() + 1;;
        const D = date.getDate();
        const h = date.getHours();
        const m = date.getMinutes();
        const total = `${Y}/${M}/${D} ${h}:${m}`
        if (todoContent) {
            const todoDict = {
                id: todoList.length,
                content: todoContent,
                createdAt: total,
                updatedAt: total,
                isFinished: false,
                isDeleted: false,
            };
            setTodoList([...todoList, todoDict]);
        }
    }
    const finishTodo = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        setTodoList(
            todoList.map((todo, index) => (todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo))
        );
    };

    const deleteTodo = (id:number) => {
        setTodoList(
            todoList.map((todo, index) => (todo.id === id ? { ...todo, isDeleted: !todo.isDeleted } : todo))
        );
    }
    return (
        <>
            <div className="selectFilter">
                <select>
                    <option value="0">全てのタスク</option>
                    <option value="0">完了したタスク</option>
                    <option value="0">現在のタスク</option>
                    <option value="0">ゴミ箱</option>
                </select>
            </div>
            <div className="createTodoList">
                <input type="text" value={ todoContent } onChange={(e) => createTodoContent(e)}/>
                <button onClick={() => createTodoList()}>追加</button>
            </div>
            <ul className="showTodoList">
            {todoList.map((item) => {
                return (
                    <li key={item.id}>
                        <input type="checkbox" onChange={(e) => finishTodo(e, item.id)} checked={item.isFinished}/>
                        <input type="text" value={item.content} />
                        <span>{item.createdAt}</span>
                        <span>{item.updatedAt}</span>
                        <button onClick={() => deleteTodo(item.id)}>削除</button>
                    </li>
                );
            })}
            </ul>
        </>
    );
};

export default Todo;
