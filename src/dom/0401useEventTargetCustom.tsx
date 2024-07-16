import React from 'react';
import { useEventTarget } from 'ahooks';

const EventTargetCustom = () => {
  const [value, { reset, onChange }] = useEventTarget({ initialValue: 'this is initial value' });

  return (
    <div>
      <input value={value} onChange={onChange} style={{ width: 200, marginRight: 20 }} />
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default EventTargetCustom;