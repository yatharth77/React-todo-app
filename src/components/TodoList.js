import React from "react";
import Todo from "./Todo";

const hasSubTodos = (todo) => {
    return todo.subTodos && todo.subTodos.length;
}

const TodoList = ({ todos, setTodos, parentStatus, completeTodos, flag, setFlag }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo, index) => {
                    return <div key={`level-${todo.level}-${index}`}>
                        <Todo 
                            todo={todo}
                            todos={todos} 
                            setTodos={setTodos} 
                            level={todo.level}
                            parentStatus={parentStatus}
                            completeTodos={completeTodos}
                            flag={flag}
                            setFlag={setFlag}
                        />
                        { hasSubTodos(todo) ? <TodoList 
                                                setTodos={setTodos} 
                                                todos={todo.subTodos} 
                                                parentStatus={todo.completed || parentStatus}
                                                completeTodos={completeTodos}
                                                flag={flag}
                                                setFlag={setFlag}
                                            /> : ''}
                    </div>
                })}
            </ul>
        </div>
    );
}

export default TodoList;