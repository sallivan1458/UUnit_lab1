import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from "@reduxjs/toolkit";


export interface ITodo {
    id: string,
    title: string,
    completed: boolean,
}

interface ITodoState  {
    list: ITodo[]
}

const initialState: ITodoState = {
    list: []
}

const inputSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        toggleComplete(state, action: PayloadAction<string>) {
            const toggledTodo = state.list.find(todo => todo.id === action.payload);
            if (toggledTodo) {
                toggledTodo.completed = !toggledTodo.completed;
            }
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        }
    },
});

export const {
    addTodo,
    toggleComplete,
    removeTodo}
    = inputSlice.actions;

export default inputSlice.reducer;