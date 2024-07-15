import React from 'react';
import { useCookieState } from 'ahooks';

function CookieState() {
  const [message, setMessage] = useCookieState('useCookieStateString');
  return (
    <input
      value={message}
      placeholder="Please enter some words..."
      onChange={(e) => setMessage(e.target.value)}
      style={{ width: 300 }}
    />
  );
};

export default CookieState;