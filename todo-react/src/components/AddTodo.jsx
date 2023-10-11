import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Input() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewTodo("");
        }
    }

    const handleDelete = (index) => {
        const newTodos =[...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

    return (
        <div>
            <Form.Control
                variant="light"
                type="text"
                placeholder="Task"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <br />
            <Button variant="primary" onClick={handleAddTodo}>Add</Button>{' '}
            
            <ul>
                {todos.map((todo, index) =>
                (<li>
                <span>{todo.text}</span>
                <Button variant="danger" onClick={handleDelete} >Delete</Button>{' '}
                </li>))}
                
            </ul>
        </div>
    );
}

export default Input;