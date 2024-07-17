import { CheckOutlined } from '@ant-design/icons';
import { useKeyPress } from 'ahooks';
import React, { useState } from 'react';

const KeyPressMatch = () => {
  const [state, setState] = useState<number>();

  useKeyPress(['shift.c'], () => {
    setState(1);
  });

  useKeyPress(
    ['c'],
    () => {
      setState(2);
    },
    {
      exactMatch: true,
    },
  );

  return (
    <div>
      <p>Try pressing the following: </p>
      <div>
        1. Modifier key [shift.c]: {state === 1 && <CheckOutlined style={{ color: '#f00' }} />}
      </div>
      <div>2. Modifier key [c]: {state === 2 && <CheckOutlined style={{ color: '#f00' }} />}</div>
    </div>
  );
};

export default KeyPressMatch;