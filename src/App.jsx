import "./App.css";
import DebugValue from "./components/DebugValue";
import DeferredValue from "./components/DeferredValue";
import ReactCompilerDefault from "./components/ReactCompilerDefault";
import ReactCompilerNoMemo from "./components/ReactCompilerNoMemo";

function App() {
  return (
    <>
      <DebugValue />
      <hr />
      <DeferredValue />
      <hr />
      <ReactCompilerDefault />
      <ReactCompilerNoMemo />
    </>
  );
}

export default App;
