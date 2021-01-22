import React from "react";

const Form = ({ todos, setTodos, inputText, setInputText }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000}
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