import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';

const ClickAwayMultiple = () => {
  const [counter, setCounter] = useState(0);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, [ref1, ref2]);

  return (
    <div>
      <button type="button" ref={ref1}>
        box1
      </button>
      <button type="button" ref={ref2} style={{ marginLeft: 16 }}>
        box2
      </button>
      <p>counter: {counter}</p>
    </div>
  );
};

export default ClickAwayMultiple;