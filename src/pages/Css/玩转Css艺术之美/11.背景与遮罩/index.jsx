import React from 'react';
import BlockTitle from '../../../../components/BlockTitle';
import Background1 from './component/帖顶背景';
import Background2 from './component/多重背景';
import HollowText from './component/镂空文本';
import Gradient from './component/渐变';
import GradientBack from './component/渐变背景';
import LinearGradient from './component/LinearGradient';
import RadialGradient from './component/RadialGradient';
import ConicGradient from './component/ConicGradient/index';
import Demo1 from './component/Demo1';
import Demo2 from './component/Demo2';
import Demo3 from './component/Demo3';
import styles from './index.module.less';

function Selector() {
  return (
    <div className={styles.selectContent}>
      <div>
        <div style={{ width: '33%' }}>
          <BlockTitle title="linear-gradient" showBorder />
          <LinearGradient />
        </div>
        <div style={{ width: '33%' }}>
          <BlockTitle title="radial-gradient" showBorder />
          <RadialGradient />
        </div>
        <div style={{ width: '33%' }}>
          <BlockTitle title="conic-gradient" showBorder />
          <ConicGradient />
        </div>
      </div>
      <div>
        <div style={{ width: '33%' }}>
          <BlockTitle title="linear-gradient" showBorder />
          <Demo1 />
        </div>
        <div style={{ width: '33%' }}>
          <BlockTitle title="radial-gradient" showBorder />
          <Demo2 />
        </div>
        <div style={{ width: '33%' }}>
          <BlockTitle title="conic-gradient" showBorder />
          <Demo3 />
        </div>
      </div>
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
      </div>
    </div>
  );
}

export default Selector;
