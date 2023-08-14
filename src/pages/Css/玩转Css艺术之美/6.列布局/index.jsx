import React from 'react';
import styles from './index.module.less';

function ReflowAndRepaint() {
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: 'red' }}></div>
      <div style={{ backgroundColor: 'yellow' }}></div>
      <div style={{ backgroundColor: 'black' }}></div>
      <div style={{ backgroundColor: 'green' }}></div>
    </div>
  );
}

export default ReflowAndRepaint;
