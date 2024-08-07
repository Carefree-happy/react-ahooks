import React from 'react';
import { useResetState } from 'ahooks';

interface State {
  hello: string;
  count: number;
}

function ResetState() {
  const [state, setState, resetState] = useResetState<State>({
    hello: '',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button
          type="button"
          style={{ marginRight: '8px' }}
          onClick={() => setState((prev) => ({ hello: 'world', count: prev.count + 1 }))}
        >
          set hello and count
        </button>

        <button type="button" onClick={resetState}>
          resetState
        </button>
      </p>
    </div>
  );
};

export default ResetState;