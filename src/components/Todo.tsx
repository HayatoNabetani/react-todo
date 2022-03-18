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
            createdAt: "2022/11/21",
            isFinished: false,
            isDeleted: false,
        },
        {
            id: 2,
            content: "test3",
            createdAt: "2022/11/21",
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
        const total = `${Y}/${M}/${D} ${h}:${m}`;
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
    const [filter, setFilter] = useState("all");
    const changeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(e.target.value);
    };


    const updateTodo = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const date = new Date();
        const Y = date.getFullYear();
        const M = date.getMonth() + 1;
        const D = date.getDate();
        const h = date.getHours();
        const m = date.getMinutes();
        const total = `${Y}/${M}/${D} ${h}:${m}`;
        setTodoList(
            todoList.map((todo, index) => (todo.id === id ? { ...todo, content : e.target.value, updatedAt: total} : todo ))
        );
    };
    return (
        <>
            <div className="selectFilter">
                <select onChange={(e) => changeFilter(e)}>
                    <option value="all">全てのタスク</option>
                    <option value="finish">完了したタスク</option>
                    <option value="now">現在のタスク</option>
                    <option value="trash">ゴミ箱</option>
                </select>
            </div>
            <div className="createTodoList">
                <input type="text" value={ todoContent } onChange={(e) => createTodoContent(e)}/>
                <button onClick={() => createTodoList()}>追加</button>
            </div>
            <ul className="showTodoList">
                {todoList.flatMap((item) => {
                    switch (filter) {
                        case "all":
                            return (
                                <li key={item.id}>
                                    <input type="checkbox" onChange={(e) => finishTodo(e, item.id)} checked={item.isFinished} />
                                    <input type="text" value={item.content} onChange={(e) => updateTodo(e,item.id)}/>
                                    <span>{item.createdAt}</span>
                                    <span>{item.updatedAt}</span>
                                    <button onClick={() => deleteTodo(item.id)}>削除</button>
                                </li>
                            );
                        case "finish":
                            if (item.isFinished) {
                                return (
                                    <li key={item.id}>
                                        <input type="checkbox" onChange={(e) => finishTodo(e, item.id)} checked={item.isFinished} />
                                        <input type="text" value={item.content} />
                                        <span>{item.createdAt}</span>
                                        <span>{item.updatedAt}</span>
                                        <button onClick={() => deleteTodo(item.id)}>削除</button>
                                    </li>
                                )
                            } else {
                                return;
                            }
                        case "now":
                            if (!item.isFinished) {
                                return (
                                    <li key={item.id}>
                                        <input type="checkbox" onChange={(e) => finishTodo(e, item.id)} checked={item.isFinished} />
                                        <input type="text" value={item.content} />
                                        <span>{item.createdAt}</span>
                                        <span>{item.updatedAt}</span>
                                        <button onClick={() => deleteTodo(item.id)}>削除</button>
                                    </li>
                                )
                            } else {
                                return;
                            }
                        case "trash":
                            if (item.isDeleted) {
                                return (
                                    <li key={item.id}>
                                        <input type="checkbox" onChange={(e) => finishTodo(e, item.id)} checked={item.isFinished} />
                                        <input type="text" value={item.content} />
                                        <span>{item.createdAt}</span>
                                        <span>{item.updatedAt}</span>
                                        <button onClick={() => deleteTodo(item.id)}>削除</button>
                                    </li>
                                )
                            } else {
                                return;
                            }
                    }
                })}
            </ul>
        </>
    );
};

export default Todo;
