import React from 'react';
import { useScroll } from 'ahooks';

const ScrollWhole = () => {
  const scroll = useScroll(document);
  return (
    <div>
      <div>{JSON.stringify(scroll)}</div>
    </div>
  );
};

export default ScrollWhole;