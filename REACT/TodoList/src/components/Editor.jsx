const Editor = (onCreate) => {
  return (
    <div className="Editor">
      <input placeholder="새로운 Todo..." type="text" />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
