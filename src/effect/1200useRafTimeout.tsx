import React, { useState } from 'react';
import { useRafTimeout } from 'ahooks';

function RafTimeout() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState<number | undefined>(1000);

  const clear = useRafTimeout(() => {
    setCount(count + 1);
  }, delay);

  return (
    <div>
      <p> count: {count} </p>
      <p style={{ marginTop: 16 }}> Delay: {delay} </p>
      <button onClick={() => setDelay((t) => (!!t ? t + 1000 : 1000))} style={{ marginRight: 8 }}>
        Delay + 1000
      </button>
      <button
        style={{ marginRight: 8 }}
        onClick={() => {
          setDelay(1000);
        }}
      >
        reset Delay
      </button>
      <button
        onClick={() => {
          clear();
        }}
      >
        clear
      </button>
    </div>
  );
};

export default RafTimeout;