import React, { useState } from 'react';
import { useEventListener } from 'ahooks';

function KeydownEventListener() {
  const [value, setValue] = useState('');

  useEventListener('keydown', (ev) => {
    setValue(ev.code);
  });

  return <p>Your press key is {value}</p>;
};

export default KeydownEventListener;