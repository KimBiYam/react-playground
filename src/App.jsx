import "./App.css";
import DebugValue from "./features/DebugValue";
import DeferredValue from "./features/DeferredValue";
import ReactCompilerDefault from "./features/ReactCompilerDefault";
import ReactCompilerNoMemo from "./features/ReactCompilerNoMemo";

function App() {
  return (
    <>
      <DebugValue />
      <hr />
      <DeferredValue />
      <hr />
      <ReactCompilerDefault />
      <ReactCompilerNoMemo />
      <hr />
    </>
  );
}

export default App;
