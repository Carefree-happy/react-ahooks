import React from 'react';
import { useCountDown } from 'ahooks';

function CountdownToLeftTime() {
  const [countdown] = useCountDown({ leftTime: 60 * 1000 });
  return <p>{countdown}</p>;
};

export default CountdownToLeftTime