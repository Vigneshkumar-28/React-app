// src/components/TodoList.js

import React from 'react';
import { List, ListItem, IconButton, Checkbox, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

function TodoList({ todos, toggleComplete, removeTodo, startEditing }) {
    return (
        <List>
            {todos.map((todo, index) => (
                <ListItem
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => toggleComplete(index)}
                        />
                        <Typography
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'gray' : 'black',
                            }}
                        >
                            {todo.text}
                        </Typography>
                    </div>
                    <div>
                        <IconButton onClick={() => startEditing(index)}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => removeTodo(index)}>
                            <Delete />
                        </IconButton>
                    </div>
                </ListItem>
            ))}
        </List>
    );
}

export default TodoList;
