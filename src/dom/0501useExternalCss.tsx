import { useExternal } from 'ahooks';
import React, { useState } from 'react';

const ExternalCss = () => {
  const [path, setPath] = useState('/useExternal/bootstrap-badge.css');

  const status = useExternal(path);

  return (
    <>
      <p>
        Status: <b>{status}</b>
      </p>
      <div className="bd-example" style={{ wordBreak: 'break-word' }}>
        <span className="badge badge-pill badge-primary">Primary</span>
        <span className="badge badge-pill badge-secondary">Secondary</span>
        <span className="badge badge-pill badge-success">Success</span>
        <span className="badge badge-pill badge-danger">Danger</span>
        <span className="badge badge-pill badge-warning">Warning</span>
        <span className="badge badge-pill badge-info">Info</span>
        <span className="badge badge-pill badge-light">Light</span>
        <span className="badge badge-pill badge-dark">Dark</span>
      </div>
      <br />
      <button type="button" style={{ marginRight: 8 }} onClick={() => setPath('')}>
        unload
      </button>
      <button
        type="button"
        style={{ marginRight: 8 }}
        onClick={() => setPath('/useExternal/bootstrap-badge.css')}
      >
        load
      </button>
    </>
  );
};

export default ExternalCss;