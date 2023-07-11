import { FC, ChangeEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { ITask } from './interfaces';
import { TodoTask } from './components/TodoTask';
import { ListCheck, Pencil } from 'tabler-icons-react';

const App: FC = () => {
  const [todos, setTodos] = useState<ITask[]>([])
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

  const removeTaskOnClick = (id: string): void => {
    setTodos(todos.filter(todoObj => {
      return todoObj.id !== id
    }))
  }

  const todosResult = todos.map((todoObj: ITask) => {
    return <TodoTask
      key={todoObj.id}
      todo={todoObj}
      removeTaskOnClick={removeTaskOnClick}
    />
  })

  return (
    <div className="appWrapper">
      <header className='headerContainer'>
        <ListCheck
          strokeWidth={1.6}
          size={50}
          color='white'
        />
        <div className='headerTitle'>
          Todo List app
        </div>
      </header>
      <main className='mainContainer'>
        <div className='addTaskWrapper'>
          <Pencil
            size={40}
            color='grey'
          />
          <input
            className='addTodoInput'
            value={taskValue}
            onChange={handleChange}
            placeholder="New task..."
            type='text'
          />
          <button
            className='todoButton addTodoButton'
            onClick={addTaskOnClick}>
            Add task
          </button>
        </div>
        <div className='todos'>
          {todosResult.length ? todosResult : <div className='emptyState'>No tasks yet :(</div>}
        </div>
      </main>
    </div>
  );
}

export default App;
