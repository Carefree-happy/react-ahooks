import React, { useRef } from 'react';
import { useHover } from 'ahooks';

const HoverRef = () => {
  const ref = useRef(null);
  const isHovering = useHover(ref);
  return <div ref={ref}>{isHovering ? 'hover' : 'leaveHover'}</div>;
};

export default HoverRef;