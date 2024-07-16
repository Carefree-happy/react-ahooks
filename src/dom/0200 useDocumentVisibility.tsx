import React, { useEffect } from 'react';
import { useDocumentVisibility } from 'ahooks';

const DocumentVisibility = () => {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    console.log(`Current document visibility state: ${documentVisibility}`);
  }, [documentVisibility]);

  return <div>Current document visibility state: {documentVisibility}</div>;
};

export default DocumentVisibility;