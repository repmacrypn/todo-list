import { TodoTask } from "./TodoTask";
import s from './TodoTask.module.css'
import { ITask } from "../../interfaces/interfaces";

interface TodoListProps {
    todos: ITask[];
}

export const TodoList = ({ todos }: TodoListProps) => {
    const todosResult = todos.map((todoObj: ITask) => {
        return <TodoTask
            key={todoObj.id}
            todo={todoObj}
        />
    })

    return (
        <div className={s.todos}>
            {todosResult.length ?
                todosResult :
                <EmptyState />}
        </div>
    )
}

export const EmptyState = () => {
    return (
        <div className={s.emptyState}>No tasks yet :(</div>
    )
}