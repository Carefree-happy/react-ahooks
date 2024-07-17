import React from 'react';
import { configResponsive, useResponsive } from 'ahooks';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});

function Responsive() {
  const responsive = useResponsive();
  return (
    <>
      <p>Please change the width of the browser window to see the effect: </p>
      {Object.keys(responsive).map((key) => (
        <p key={key}>
          {key} {responsive[key] ? '✔' : '✘'}
        </p>
      ))}
    </>
  );
}

export default Responsive;