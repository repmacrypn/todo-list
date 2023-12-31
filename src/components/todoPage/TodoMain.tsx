import { useState } from 'react';
import s from './TodoTask.module.css'
import { ITask } from '../../interfaces/interfaces';
import { TodoContext } from '../../context/context';
import { TodoList } from '../../components/todoPage/TodoList';
import { TaskAdder } from './TodoAdder';

export const TodoMain = () => {
    const [todos, setTodos] = useState<ITask[]>([])
    return (
        <main className={s.mainContainer}>
            <TaskAdder
                setTodos={setTodos}
                todos={todos}
            />
            <TodoContext.Provider value={{ todos, setTodos }}>
                <TodoList todos={todos} />
            </TodoContext.Provider>
        </main>
    )
}