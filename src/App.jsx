import "./App.css";
import SimpleAccordion from "./components/SimpleAccordion";
import DebugValue from "./features/DebugValue";
import DeferredValue from "./features/DeferredValue";
import ReactCompilerDefault from "./features/ReactCompilerDefault";
import ReactCompilerNoMemo from "./features/ReactCompilerNoMemo";

function App() {
  return (
    <>
      <SimpleAccordion title="DebugValue">
        <DebugValue />
      </SimpleAccordion>
      <hr />
      <SimpleAccordion title="DeferredValue">
        <DeferredValue />
      </SimpleAccordion>
      <hr />
      <SimpleAccordion title="ReactCompilerDefault">
        <ReactCompilerDefault />
        <ReactCompilerNoMemo />
      </SimpleAccordion>
      <hr />
    </>
  );
}

export default App;
