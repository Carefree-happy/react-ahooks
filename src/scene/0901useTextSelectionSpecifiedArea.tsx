import React, { useRef } from 'react';
import { useTextSelection } from 'ahooks';

function TextSelectionSpecifiedArea () {
  const ref = useRef(null);
  const selection = useTextSelection(ref);
  return (
    <div>
      <div ref={ref} style={{ border: '1px solid', padding: 20 }}>
        <p>Please swipe your mouse to select any text on this paragraph.</p>
      </div>
      <p style={{ wordWrap: 'break-word' }}>Result：{JSON.stringify(selection)}</p>
      <p>selection:{selection.text}</p>
    </div>
  );
};

export default TextSelectionSpecifiedArea;