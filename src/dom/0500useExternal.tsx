import React from 'react';
import { useExternal } from 'ahooks';

const ExternalJs = () => {
  const status = useExternal('/useExternal/test-external-script.js', {
    js: {
      async: true,
    },
  });

  const testScript = (window as any).TEST_SCRIPT as { start: () => string } | undefined;

  return (
    <>
      <p>
        Status: <b>{status}</b>
      </p>
      <p>
        Response: <i>{status === 'ready' ? testScript?.start() : '-'}</i>
      </p>
    </>
  );
};

export default ExternalJs;