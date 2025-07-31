// Layouts/HeaderOnlyLayout/index.js
import React from 'react';
import BaseLayout from '../BaseLayout';
import styles from './SecondLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SecondLayout({ children }) {
  return (
    <BaseLayout
      renderMainContent={() => (
        <div className="container-fluid" style={{ paddingTop: '80px' }}>
          <div className="row" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="col-8 col-md-8 col-lg-8 mx-auto">
              <div className="content">{children}</div>
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default SecondLayout;
