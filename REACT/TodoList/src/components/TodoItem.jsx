const TodoItem = () => {
  return (
    <div className="TodoItem">
      <input type="checkbox" id="{checkbox}" />
      <label htmlFor="{checkbox}">Todo..</label>
      {/* <div className="content">Todo..</div> */}
      <div className="date">Date</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
