import React from 'react';
import { useInViewport } from 'ahooks';

const InViewportRatio = () => {
  const [inViewport, ratio] = useInViewport(() => document.getElementById('children'), {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: () => document.getElementById('parent'),
  });
  return (
    <div>
      <div style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }} id="parent">
        scroll here
        <div style={{ height: 800 }}>
          <div
            id="children"
            style={{
              border: '1px solid',
              height: 100,
              width: 100,
              textAlign: 'center',
              marginTop: 80,
            }}
          >
            observer dom
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, color: inViewport ? '#87d068' : '#f50' }}>
        <p>inViewport: {inViewport ? 'visible' : 'hidden'}</p>
        <p>ratio: {ratio}</p>
      </div>
    </div>
  );
};

export default InViewportRatio;