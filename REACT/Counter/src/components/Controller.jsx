const Controller = ({ oneClickButton }) => {
  return (
    <div className="controller">
      <button
        onClick={() => {
          oneClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          oneClickButton(-1);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          oneClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          oneClickButton(100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          oneClickButton(10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          oneClickButton(1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
