import { ITask } from "../../interfaces/interfaces";
import { TodoTask } from "./TodoTask";

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
        <div className='todos'>
            {todosResult.length ?
                todosResult :
                <EmptyState />}
        </div>
    )
}

export const EmptyState = () => {
    return (
        <div className='emptyState'>No tasks yet :(</div>
    )
}