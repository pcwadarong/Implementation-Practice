import Viewer from './components/Viewer';
import Controller from './components/Controller';
import './assets/css/styles.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const oneClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller oneClickButton={oneClickButton} />
      </section>
    </>
  );
}

export default App;
