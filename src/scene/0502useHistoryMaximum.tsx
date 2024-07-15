import { useHistoryTravel } from 'ahooks';
import React from 'react';

function LimitMaximum() {
  const maxLength = 3;
  const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<string>(
    '',
    maxLength,
  );

  return (
    <div>
      <div>maxLength: {maxLength}</div>
      <div>backLength: {backLength}</div>
      <div>forwardLength: {forwardLength}</div>
      <input value={value || ''} onChange={(e) => setValue(e.target.value)} />
      <button disabled={backLength <= 0} onClick={back} style={{ margin: '0 8px' }}>
        back
      </button>
      <button disabled={forwardLength <= 0} onClick={forward}>
        forward
      </button>
    </div>
  );
};

export default LimitMaximum;