import { FC } from 'react';
import { Header } from './components/header/Header';
import { TodoMain } from './components/todoPage/TodoMain';
import './App.css';

const App: FC = () => {
  return (
    <div className='appWrapper'>
      <Header />
      <TodoMain />
    </div>
  );
}

export default App;
