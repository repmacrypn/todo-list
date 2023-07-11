import { ChangeEvent, useState, useRef, useEffect } from 'react';
import { ITask } from '../interfaces';

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

    let todoItem

    if (editNum) {
        todoItem = (
            <input
                ref={inputRef}
                value={itemValue}
                onChange={handleItemChange}
                onBlur={() => setEditNum(null)}
            />
        )
    } else {
        todoItem = (
            <div>
                <input type='checkbox' checked={isDone} onChange={() => setIsDone(value => !value)} />
                <span onClick={() => setEditNum(todo.id)}>
                    {itemValue}
                </span>
                <button onClick={() => removeTaskOnClick(todo.id)}>
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