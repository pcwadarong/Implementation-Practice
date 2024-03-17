import { useState } from 'react';

const Editor = ({ onCreate }) => {
  const { content, setContent } = useState('');

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onCreate(content);
  };
  return (
    <div className="Editor">
      <input
        placeholder="새로운 Todo..."
        type="text"
        value={content}
        onChange={onChangeContent}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
