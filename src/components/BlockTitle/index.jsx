import React from 'react';
import styles from './index.module.less';

function BlockTitle(props) {
  const { title } = props;
  return (
    <div className={styles.blockContent}>
      <div></div>
      <div>{title}</div>
    </div>
  );
}

export default BlockTitle;
