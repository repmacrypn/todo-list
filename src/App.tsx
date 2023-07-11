import { FC, ChangeEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import { TextInput } from '@mantine/core';
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
          <TextInput
            value={taskValue}
            onChange={handleChange}
            placeholder="New task..."
            radius="md"
            icon={<Pencil />}
          />
          <button onClick={addTaskOnClick}>
            Add task
          </button>
        </div>
        <div>
          {todosResult}
        </div>
      </main>
    </div>
  );
}

export default App;
