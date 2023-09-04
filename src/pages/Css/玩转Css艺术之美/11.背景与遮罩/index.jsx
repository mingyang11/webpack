import React from 'react';
import BlockTitle from '../../../../components/BlockTitle';
import Background1 from './component/帖顶背景';
import Background2 from './component/多重背景';
import HollowText from './component/镂空文本';
import Gradient from './component/渐变';
import GradientBack from './component/渐变背景';
import styles from './index.module.less';

function Selector() {
  return (
    <div className={styles.selectContent}>
      <div>
        <div>
          <BlockTitle title="帖顶背景" showBorder />
          <Background1 />
        </div>
        <div>
          <BlockTitle title="多重背景" showBorder />
          <Background2 />
        </div>
      </div>
      <div>
        <div>
          <BlockTitle title="镂空文本" showBorder />
          <HollowText />
        </div>
        <div>
          <BlockTitle title="锥形渐变" showBorder />
          <Gradient />
        </div>
      </div>
      <div>
        <div>
          <BlockTitle title="渐变背景" showBorder />
          <GradientBack />
        </div>
        <div>
          <BlockTitle title="渐变文本" showBorder />
          <Gradient />
        </div>
      </div>
    </div>
  );
}

export default Selector;
