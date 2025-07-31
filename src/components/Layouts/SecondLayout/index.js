// Layouts/HeaderOnlyLayout/index.js
import React from 'react';
import BaseLayout from '../BaseLayout';

function SecondLayout({ children }) {
  return (
    <BaseLayout
      renderMainContent={() => (
        <div className="container-fluid">
          <div className="content">{children}</div>
        </div>
      )}
    />
  );
}

export default SecondLayout;
