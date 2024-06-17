import { useEffect, useReducer, useRef } from "react";

export default function ReactCompilerDefault() {
  const [renderCount, forceRender] = useReducer((state) => state + 1, 0);
  const [functionCallCount, incrementFunctionCallCount] = useReducer(
    (state) => state + 1,
    0
  );
  const intervalId = useRef();

  const test = () => {
    console.log("useCallback test");
    incrementFunctionCallCount();
  };

  useEffect(() => {
    // interval에 의해서 컴포넌트는 렌더링 되지만 useCallback 없이도 최초 렌더링 시에만 호출
    test();
  }, [test]);

  useEffect(() => {
    intervalId.current = setInterval(forceRender, 1000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, []);

  return (
    <div>
      알아서 memo가 적용된당~~ renderCount:{renderCount}, functionCallCount:
      {functionCallCount}
    </div>
  );
}
