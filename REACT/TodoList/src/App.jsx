import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';
import Exam from './components/Exam';
import { useState, useRef } from 'react';
import './assets/css/styles.css';

// const mockData = [
//   { id: 0, isDone: false, content: '공부', date: new Date().getTime() },
//   { id: 1, isDone: false, content: '과제', date: new Date().getTime() },
//   { id: 2, isDone: false, content: '운동', date: new Date().getTime() },
// ];

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, setTodos] = useState([]);
  const isRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: isRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todo State 값 중, targetId와 일치하는 Id를 갖는 todo item의 isDone 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  // 삭제하기
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <>
      <Exam />
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
    </>
  );
}

export default App;
