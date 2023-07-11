import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { ITask } from '../interfaces';
import '../App.css'

interface Props {
    todo: ITask;
    removeTaskOnClick(id: string): void;
}

export const TodoTask = ({ todo, removeTaskOnClick }: Props) => {
    const [editNum, setEditNum] = useState<string | null>(null)
    const [itemValue, setItemValue] = useState<string>(todo.todoName)
    const [isDone, setIsDone] = useState<boolean>(false)

    const inputRef = useRef<HTMLInputElement>(null)

    const handleItemChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setItemValue(e.target.value)
    }

    const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation()
    }

    let todoItem: React.ReactElement<HTMLInputElement>

    if (editNum) {
        todoItem = (
            <input
                className='addTodoInput'
                ref={inputRef}
                value={itemValue}
                onChange={handleItemChange}
                onBlur={() => setEditNum(null)}
            />
        )
    } else {
        todoItem = (
            <div
                onClick={() => setEditNum(todo.id)}
                className='todoItemsWrapper'
            >
                <input
                    onClick={handleCheckboxClick}
                    className='todoCheckedInput'
                    type='checkbox'
                    checked={isDone}
                    onChange={() => setIsDone(value => !value)}
                />
                <div
                    className='todoItemValue'
                >
                    {itemValue}
                </div>
                <button
                    className='todoButton removeTodoButton'
                    onClick={() => removeTaskOnClick(todo.id)}
                >
                    X
                </button>
            </div>
        )
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [todoItem])

    return <div>
        {todoItem}
    </div>
}