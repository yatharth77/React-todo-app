import React, {useEffect, useState} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    fetchLocalTodos();
  }, [])

  useEffect(() => {
    saveLocalTodos();
  }, [todos])

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }

  const fetchLocalTodos = () => {
    let localTodos = [];
    if (localStorage.getItem("todos") === null){
      localTodos = localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>React Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList 
        setTodos={setTodos} 
        todos={todos} 
        parentStatus={false} 
        parentTodo={null}
        completeTodos={todos} 
        flag={flag} 
        setFlag={setFlag} />
    </div>
  );
}

export default App;
