import { ITask } from '../interfaces/interfaces';
import React from 'react'

interface ITodoContext {
    todos: ITask[];
    setTodos(todos: ITask[]): void;
}

export const TodoContext = React.createContext<ITodoContext>({
    todos: [],
    setTodos: () => { },
})

export const useTodoContext = () => React.useContext(TodoContext)