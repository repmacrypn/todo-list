import { FC } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { TodoMain } from './components/todoPage/TodoMain';

const App: FC = () => {
  return (
    <div className="appWrapper">
      <Header />
      <TodoMain />
    </div>
  );
}

export default App;
