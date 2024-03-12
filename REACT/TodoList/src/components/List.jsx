import TodoItem from './TodoItem';

const List = () => {
  return (
    <div className="List">
      <h4>Todo List 💙</h4>
      <input placeholder="검색어를 입력하세요" type="text" />
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default List;
