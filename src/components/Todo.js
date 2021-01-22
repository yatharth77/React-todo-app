import React from 'react';

const Todo = ({ setTodos, todos, key, text }) => {
    const deleteHandle = () => {
        setTodos(todos.filter((el) => el.id !== todos.id));
    }
    return(
        <div className="todo">
            <li className="todo-item">{ text }</li>
            <button className="complete-btn">
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandle} className="trash-btn">
                <i className="fa fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;