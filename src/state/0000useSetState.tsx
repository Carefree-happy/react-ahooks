import React from "react";
import { useSetState } from "ahooks";

interface State {
  hello: string;
  [key: string]: any;
}

function SetState() {
  const [state, setState] = useSetState<State>({
    hello: "",
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({ hello: "SunJing" })}>
          set SunJing
        </button>
        <button
          type="button"
          onClick={() => setState({ foo: "bar" })}
          style={{ margin: "0 8px" }}
        >
          set foo
        </button>
      </p>
    </div>
  );
}

export default SetState;
