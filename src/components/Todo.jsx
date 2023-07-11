import React from 'react'

function Todo({text,todos,setTodos,todo}) {
    const deleteHandler = () => {
        setTodos(todos.filter((eL) => eL.id !== todo.id))
    }
    return (
        <div className="todo">
            <button className="complete-btn">
                <i className="fas fa-check-circle"></i>
            </button><li className="todo-item" >{text}</li>
            <button className="trash-btn" onClick={deleteHandler}><i className="fa fa-minus-circle"></i>
            </button></div>
    )
}

export default Todo