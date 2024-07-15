import React from 'react';
import { useLocalStorageState } from 'ahooks';

const defaultArray = ['a', 'e', 'i', 'o', 'u'];

function LocalStorageStateArray () {
  const [value, setValue] = useLocalStorageState('use-local-storage-state-demo2', {
    defaultValue: defaultArray,
  });

  return (
    <>
      <p>{value?.join('-')}</p>
      <button
        type="button"
        style={{ marginRight: '16px' }}
        // string[] | [] worked
        onClick={() => setValue([...value as string[], Math.random().toString(36).slice(-1)])}
      >
        push random
      </button>
      <button type="button" onClick={() => setValue(defaultArray)}>
        reset
      </button>
    </>
  );
}

export default LocalStorageStateArray;