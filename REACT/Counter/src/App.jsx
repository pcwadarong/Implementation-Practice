import Viewer from './components/Viewer';
import Controller from './components/Controller';

function App() {
  return (
    <>
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </>
  );
}

export default App;
