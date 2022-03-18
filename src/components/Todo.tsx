import React, { useState, useEffect } from "react";

const Todo = () => {
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
            isFinished: false,
            isDeleted: false,
        },
    ]);
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
                <input type="text" />
                <button>追加</button>
            </div>
            <ul className="showTodoList">
            {todoList.map((item) => {
                return (
                    <li key={item.id}>
                        <input type="checkbox" />
                        <input type="text" value={item.content} />
                        <span>{item.createdAt}</span>
                        <span>{item.updatedAt}</span>
                        <button>削除</button>
                    </li>
                );
            })}
            </ul>
        </>
    );
};

export default Todo;
