import React from 'react';
import BlockTitle from '../../../../components/BlockTitle';
import TransformCom from './component/transform';
import TransformHeart from './component/transform/transformHeart';
import TransformBorder from './component/transform/transformBorder';
import styles from './index.module.less';

function Selector() {
  return (
    <div className={styles.selectContent}>
      <div>
        <div>
          <BlockTitle title="transform" showBorder />
          <TransformCom />
        </div>
        <div>
          <BlockTitle title="transform-动感心形" showBorder />
          <TransformHeart />
        </div>
      </div>
      <div>
        <div>
          <BlockTitle title="像素边框" showBorder />
          <TransformBorder />
        </div>
        <div>
          <BlockTitle title="transform-动感心形" showBorder />
          <div>as</div>
        </div>
      </div>
    </div>
  );
}

export default Selector;
