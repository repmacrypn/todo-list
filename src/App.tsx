import { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';
import { TodoTask } from './components/TodoTask';
import { nanoid } from 'nanoid';

const App: FC = () => {
  const [todos, setTodos] = useState<ITask[]>([])
  const [taskValue, setTaskValue] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTaskValue(e.target.value)
  }

  const addTaskOnClick = (): void => {
    const newTask = { id: nanoid(), todoName: taskValue, isDone: false }
    setTodos([...todos, newTask])
    setTaskValue('')
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
    <div className="App">
      <header>
        header
      </header>
      <main>
        <input
          onChange={handleChange}
          value={taskValue}
          type='text'
          placeholder='Input new task...'
        />
        <button onClick={addTaskOnClick}>
          Add task
        </button>
        <div>
          {todosResult}
        </div>
      </main>
    </div>
  );
}

export default App;
