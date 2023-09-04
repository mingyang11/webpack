import React from 'react';
import styles from './index.module.less';

function BlockTitle(props) {
  const { title, showBorder = false } = props;
  return (
    <div
      className={styles.blockContent}
      border={showBorder ? 'show' : undefined}
    >
      <div></div>
      <div>{title}</div>
    </div>
  );
}

export default BlockTitle;
