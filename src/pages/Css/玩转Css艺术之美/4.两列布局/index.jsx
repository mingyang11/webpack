import React from 'react';
import styles from './index.module.less';

function ReflowAndRepaint() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}></div>
    </div>
  );
}

export default ReflowAndRepaint;
