import React from 'react';
import styles from './index.module.less';

function Index() {
  return (
    <div>
      <div className={styles.splicedBg}></div>
      <div className={styles.overlyingBg}></div>
    </div>
  );
}

export default Index;
