import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, level: 1, id: Math.floor(Math.random() * 1000), subTodos: [] }
        ]);
        setInputText('');
    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button className="todo-button" type="submit" onClick={handleSubmit}>
                <i className="fa fa-plus-square"></i>
            </button>
        </form>
    );
}

export default Form;