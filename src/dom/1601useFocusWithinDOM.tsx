import { useFocusWithin } from 'ahooks';
import React from 'react';

const FocusWithinDOM = () => {
  const isFocusWithin = useFocusWithin(() => document.getElementById('focus-area'));

  return (
    <div>
      <div
        id="focus-area"
        style={{
          padding: 16,
          backgroundColor: isFocusWithin ? 'red' : '',
          border: '1px solid gray',
        }}
      >
        <label style={{ display: 'block' }}>
          First Name: <input />
        </label>
        <label style={{ display: 'block', marginTop: 16 }}>
          Last Name: <input />
        </label>
      </div>
      <p>isFocusWithin: {JSON.stringify(isFocusWithin)}</p>
    </div>
  );
};

export default FocusWithinDOM;