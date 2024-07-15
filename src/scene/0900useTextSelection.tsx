import React from 'react';
import { useTextSelection } from 'ahooks';

function TextSelection () {
  const { text } = useTextSelection();
  return (
    <div>
      <p>You can select text all page.</p>
      <p>Result：{text}</p>
    </div>
  );
};

export default TextSelection;