import React, { useState } from 'react';
import { useClickAway } from 'ahooks';

const ClickAwayId = () => {
  const [counter, setCounter] = useState(0);

  useClickAway(
    () => {
      setCounter((s) => s + 1);
    },
    () => document.getElementById('use-click-away-button'),
  );

  return (
    <div>
      <button type="button" id="use-click-away-button">
        box
      </button>
      <p>counter: {counter}</p>
    </div>
  );
};
export default ClickAwayId;