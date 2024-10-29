// src/components/TodoInput.js

import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

function TodoInput({ addTodo, isEditing, currentTodo }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (isEditing) setInputValue(currentTodo.text);
    }, [isEditing, currentTodo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) return;
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
            <TextField
                variant="outlined"
                label={isEditing ? 'Edit task' : 'Add a new task'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="small"
                fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
                {isEditing ? 'Save' : 'Add'}
            </Button>
        </form>
    );
}

export default TodoInput;
