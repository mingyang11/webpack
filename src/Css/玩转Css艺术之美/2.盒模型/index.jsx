import React from 'react';
import styles from './index.module.less';

function ReflowAndRepaint() {
  return (
    <div>
      <div className={styles.contentBox}></div>
      <div className={styles.borderBox}></div>
    </div>
  );
}

export default ReflowAndRepaint;
