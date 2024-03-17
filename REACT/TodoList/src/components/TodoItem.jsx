const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={isDone}
        id={id}
        onChange={onChangeCheckbox}
      />
      <label htmlFor={id}>{content}</label>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
