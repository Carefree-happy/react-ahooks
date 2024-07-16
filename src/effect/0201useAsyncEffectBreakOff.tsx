import React, { useState } from 'react';
import { useAsyncEffect } from 'ahooks';

function mockCheck(val: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val.length > 0);
    }, 1000);
  });
}

function AsyncEffectBreakOff() {
  const [value, setValue] = useState('');
  const [pass, setPass] = useState<boolean>();

  useAsyncEffect(
    async function* () {
      setPass(undefined);
      const result = await mockCheck(value);
      yield; // Check whether the effect is still valid, if it is has been cleaned up, stop at here.
      setPass(result);
    },
    [value],
  );

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p>
        {pass === null && 'Checking...'}
        {pass === false && 'Check failed.'}
        {pass === true && 'Check passed.'}
      </p>
    </div>
  );
};

export default AsyncEffectBreakOff;