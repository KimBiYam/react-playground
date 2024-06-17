import { useEffect, useReducer } from "react";

export default function ReactCompilerNoMemo() {
  "use no memo";
  const [functionCallCount, incrementFunctionCallCount] = useReducer(
    (state) => state + 1,
    0
  );

  const test = () => {
    console.log("useCallback test");
    incrementFunctionCallCount();
  };

  useEffect(() => {
    // use no memo면 당연하게도 무한 루프에 빠진다..
    if (functionCallCount < 100) test();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [test]);

  return <div>no memo~~ functionCallCount: {functionCallCount}</div>;
}
