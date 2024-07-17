import React, { useRef } from 'react';
import { useSize } from 'ahooks';

const Size = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  return (
    <div ref={ref}>
      <p>Try to resize the preview window </p>
      <p>
        width: {size?.width}px, height: {size?.height}px
      </p>
    </div>
  );
};

export default Size;