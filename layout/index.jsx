import React from 'react';
import { Outlet } from 'react-router-dom';
// import routes from './routes';
import Header from '../src/components/Header';
import styles from './index.module.less';

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <header>
        <div className={styles.routeContent}>
          <Header />
        </div>
        <div className={styles.userContent}></div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default Layout;
