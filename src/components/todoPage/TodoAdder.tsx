import { Pencil } from 'tabler-icons-react';
import { ChangeEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import s from './TodoTask.module.css'
import { ITask } from '../../interfaces/interfaces';

interface TaskAdderProps {
    setTodos(todosArr: ITask[]): void;
    todos: ITask[];
}

export const TaskAdder = ({ setTodos, todos }: TaskAdderProps) => {
    const [taskValue, setTaskValue] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTaskValue(e.currentTarget.value)
    }

    const addTaskOnClick = (): void => {
        const newTask = { id: nanoid(), todoName: taskValue, isDone: false }
        if (taskValue) {
            setTodos([...todos, newTask])
            setTaskValue('')
        }
    }

    return (
        <div className={s.addTaskWrapper}>
            <Pencil
                size={40}
                color='grey'
            />
            <input
                className={s.addTodoInput}
                value={taskValue}
                onChange={handleChange}
                placeholder='New task...'
                type='text'
            />
            <button
                className={`${s.todoButton} ${s.addTodoButton}`}
                onClick={addTaskOnClick}>
                Add task
            </button>
        </div>
    )
}