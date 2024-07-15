import React from 'react';
import { useLocalStorageState } from 'ahooks';

function LocalStorageStateSync () {
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useLocalStorageState('use-local-storage-state-demo4', {
    defaultValue: 0,
    listenStorageChange: true,
  });

  return (
    <div style={{ marginBottom: '8px' }}>
      <button style={{ marginRight: '8px' }} onClick={() => setCount(count! + 1)}>
        count: {count}
      </button>
      <button onClick={() => setCount()}>Clear</button>
    </div>
  );
}

export default LocalStorageStateSync;