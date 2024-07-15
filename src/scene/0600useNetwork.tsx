import React from 'react';
import { useNetwork } from 'ahooks';

function Network() {
  const networkState = useNetwork();

  return (
    <div>
      <div>Network information: </div>
      <pre>{JSON.stringify(networkState, null, 2)}</pre>
    </div>
  );
};

export default Network;