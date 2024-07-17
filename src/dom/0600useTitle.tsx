import React from 'react';
import { useTitle } from 'ahooks';

const Title = () => {
  useTitle('My Page Title');

  return (
    <div>
      <p>Set title of the page.</p>
    </div>
  );
};
export default Title;