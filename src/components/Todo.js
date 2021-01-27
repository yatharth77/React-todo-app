import React, {useState} from 'react';

const Todo = ({ todo, todos, setTodos, parentStatus, parentTodo, level, completeTodos, flag, setFlag }) => {
    const [inputSubTodoText, setInputSubTodoText] = useState("");

    function forceRender(){
        localStorage.setItem('todos', JSON.stringify(completeTodos)); 
        setFlag(!flag);
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        todos.splice(todos.indexOf(todo), 1);
        forceRender();
    };

    const completeHandler = () => {
        todo.completed = !todo.completed;
        let solveChildrenStatus = true;
        todos.map((item) => {
            solveChildrenStatus = solveChildrenStatus && (item.completed || (item.subTodos.length && item.childStatus));
        })
        if(parentTodo){
            parentTodo.childStatus = solveChildrenStatus;
        }
        forceRender();
    }

    const inputSubTodoTextHandler = (e) => {
        setInputSubTodoText(e.target.value);
    };


    const addSubTodoHandler = (e) => {
        e.preventDefault();
        todo.subTodos.push( { text: inputSubTodoText, completed: false, childStatus: false, level: level + 1, id: Math.floor(Math.random() * 1000), subTodos: [] });
        forceRender();
        setInputSubTodoText('');
    }

    return(
        <div className={`todo ${(todo.completed || parentStatus || (todo && todo.subTodos.length && todo.childStatus)) ? "completed" : ""}`}>
            <li className="todo-item" >{ todo.text }</li>
            <input value={inputSubTodoText} onChange={inputSubTodoTextHandler} type="text" className="todo-input" />
            <button onClick={completeHandler} className="complete-btn">
                <i className="fa fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fa fa-trash"></i>
            </button>
            <button onClick={addSubTodoHandler} className="add-todo-btn">
                <i className="fa fa-plus-square"></i>
            </button>
        </div>
    );
}

export default Todo;