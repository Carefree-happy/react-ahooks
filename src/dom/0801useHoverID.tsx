import React from 'react';
import { useHover } from 'ahooks';

const HoverId = () => {
  const isHovering = useHover(() => document.getElementById('hover-div'), {
    onEnter: () => {
      console.log('onEnter');
    },
    onLeave: () => {
      console.log('onLeave');
    },
    onChange: isHover => {
      console.log('onChange', isHover);
    },
  });

  return <div id="hover-div">{isHovering ? 'hover' : 'leaveHover'}</div>;
};

export default HoverId;