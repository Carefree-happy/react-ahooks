import React from 'react';
import { useSize } from 'ahooks';

const SizeDOM = () => {
  const size = useSize(document.querySelector('body'));
  return (
    <div>
      <p>Try to resize the preview window </p>
      <p>
        width: {size?.width}px, height: {size?.height}px
      </p>
    </div>
  );
};

export default SizeDOM;