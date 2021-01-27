import React, {useState} from 'react';

const Todo = ({ todo, todos, setTodos, parentStatus ,level, completeTodos, flag, setFlag }) => {
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
        forceRender();
    }

    const inputSubTodoTextHandler = (e) => {
        setInputSubTodoText(e.target.value);
    };


    const addSubTodoHandler = (e) => {
        e.preventDefault();
        todo.subTodos.push( { text: inputSubTodoText, completed: false, level: level + 1, id: Math.floor(Math.random() * 1000), subTodos: [] });
        forceRender();
        setInputSubTodoText('');
    }

    const handleUpadte = (Todos, id) => {
        let temp = [];
        Todos.map((item) => {
            if(item.id === id){
                item.subTodos.push({ text: inputSubTodoText, completed: false, level: level + 1, id: Math.floor(Math.random() * 1000), subTodos: [] });
                return Todos;
            }
            if(item.subTodos && item.subTodos.length){
                item.subTodos = handleUpadte(item.subTodos, id);
            }
        })
        return Todos;
    }

    return(
        <div className={`todo ${todo.completed || parentStatus ? "completed" : ""}`}>
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