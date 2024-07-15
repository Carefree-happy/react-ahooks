import React from 'react';
import { useSetState } from 'ahooks';

interface State {
  hello: string;
  count: number;
}

function SetStateWithCallback () {
  const [state, setState] = useSetState<State>({
    hello: 'world',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
          count + 1
        </button>
      </p>
    </div>
  );
};

export default SetStateWithCallback;
