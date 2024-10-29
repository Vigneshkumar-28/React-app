// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { Container, Typography } from '@mui/material';

function App() {
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    // Load tasks from localStorage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) setTodos(savedTodos);
    }, []);

    // Save tasks to localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Add new task
    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }]);
    };

    // Toggle task completion
    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    // Remove task
    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    // Start editing a task
    const startEditing = (index) => {
        setIsEditing(true);
        setCurrentTodo({ ...todos[index], index });
    };

    // Save edited task
    const saveTodo = (text) => {
        const updatedTodos = todos.map((todo, i) =>
            i === currentTodo.index ? { ...todo, text } : todo
        );
        setTodos(updatedTodos);
        setIsEditing(false);
        setCurrentTodo({});
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Advanced To-Do List
            </Typography>
            <TodoInput addTodo={isEditing ? saveTodo : addTodo} />
            <TodoList
                todos={todos}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
                startEditing={startEditing}
            />
        </Container>
    );
}

export default App;
