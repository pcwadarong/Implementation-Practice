import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import { useState, uesRef } from 'react';
import './assets/css/styles.css';

const mockData = [
  { id: 0, isDone: false, content: '공부', date: new Date().getTime() },
  { id: 1, isDone: false, content: '과제', date: new Date().getTime() },
  { id: 2, isDone: false, content: '운동', date: new Date().getTime() },
];

function App() {
  const { Todos, setTodos } = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id: 0,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...Todos]);
  };

  return (
    <>
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </>
  );
}

export default App;
