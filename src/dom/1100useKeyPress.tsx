import React, { useState } from 'react';
import { useKeyPress } from 'ahooks';

const KeyPress = () => {
  const [counter, setCounter] = useState(0);

  // keyCode name for ArrowUp or ArrowDown keyup
  useKeyPress('uparrow', () => {
    setCounter((s) => s + 1);
  });

  // keyCode value for ArrowUp or ArrowDown
  useKeyPress(40, () => {
    setCounter((s) => s - 1);
  });

  return (
    <div>
      <p>Try pressing the following: </p>
      <div>1. Press ArrowUp by key to increase</div>
      <div>2. Press ArrowDown by keyCode to decrease</div>
      <div>
        counter: <span style={{ color: '#f00' }}>{counter}</span>
      </div>
    </div>
  );
};

export default KeyPress;