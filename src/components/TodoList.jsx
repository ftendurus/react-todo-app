import React from 'react'

function TodoList() {
    return (
        <ul class="todo-list">
            <div class="todo completed" style="display: flex;">
                <button class="complete-btn">
                    <i class="fas fa-check-circle"></i>
                </button><li class="todo-item">dsa</li>
                <button class="trash-btn">
                    <i class="fa fa-minus-circle">
                    </i></button></div><div class="todo">
                <button class="complete-btn">
                    <i class="fas fa-check-circle"></i>
                </button><li class="todo-item">dsad</li>
                <button class="trash-btn">
                    <i class="fa fa-minus-circle"></i>
                </button>
            </div>
        </ul>)
}

export default TodoList