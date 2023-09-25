import React from 'react';
import styles from './index.module.less';

function Index() {
  return (
    <div className={styles.content}>
      <div className={styles.demo1}></div>
      <div className={styles.demo2}></div>
      <div className={styles.demo4}>50</div>
      <div className={styles.demo5}>50</div>
      {/* <div className={styles.demo6}></div>
      <div className={styles.demo7}></div> */}
    </div>
  );
}

export default Index;
