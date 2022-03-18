import React from 'react'

const Filter = (props:any) => {
    return (
        <>
            <select onChange={(e) => props.changeFilter(e)}>
                <option value="all">全てのタスク</option>
                <option value="finish">完了したタスク</option>
                <option value="now">現在のタスク</option>
                <option value="trash">ゴミ箱</option>
            </select>
        </>
    );
}

export default Filter