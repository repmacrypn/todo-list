import { ChangeEvent, useState, useRef, useEffect } from 'react';
import s from './TodoTask.module.css'
import { ITask } from '../../interfaces/interfaces';
import { useTodoContext } from '../../context/context';

interface TodoTaskProps {
    todo: ITask;
}

export const TodoTask = ({ todo }: TodoTaskProps) => {
    const [editNum, setEditNum] = useState<string | null>(null)
    const [itemValue, setItemValue] = useState<string>(todo.todoName)

    const inputRef = useRef<HTMLInputElement>(null)
    let todoItem: React.ReactElement<HTMLInputElement>

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setItemValue(e.target.value)
    }

    if (editNum) {
        todoItem = (
            <input
                className={s.addTodoInput}
                ref={inputRef}
                value={itemValue}
                onChange={handleItemChange}
                onBlur={() => setEditNum(null)}
            />
        )
    } else {
        todoItem = (
            <TodoDivItem
                todo={todo}
                itemValue={itemValue}
                setEditNum={setEditNum}
            />
        )
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [todoItem])

    return <div>{todoItem}</div>
}

interface TodoDivItemProps {
    todo: ITask;
    itemValue: string;
    setEditNum(id: string): void;

}

const TodoDivItem = ({ todo, itemValue, setEditNum }: TodoDivItemProps) => {
    const [isDone, setIsDone] = useState<boolean>(false)
    const { todos, setTodos } = useTodoContext()

    const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation()
    }

    const removeTaskOnClick = (id: string): void => {
        setTodos(todos.filter((todoObj: ITask) => {
            return todoObj.id !== id
        }))
    }

    return (
        <div
            onClick={() => setEditNum(todo.id)}
            className={`${s.todoItemsWrapper} ${s['todoDone' + isDone]}`}
        >
            <input
                onClick={handleCheckboxClick}
                className={s.todoCheckedInput}
                type='checkbox'
                checked={isDone}
                onChange={() => setIsDone(value => !value)}
            />
            <div className={s.todoItemValue}>
                {itemValue}
            </div>
            <button
                className={`${s.todoButton} ${s.removeTodoButton}`}
                onClick={() => removeTaskOnClick(todo.id)}
            >
                X
            </button>
        </div>
    )
}