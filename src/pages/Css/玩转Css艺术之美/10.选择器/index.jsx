import React from 'react';
import BlockTitle from '../../../../components/BlockTitle';
import AdJoin from './component/AdJoin';
import Hover from './component/Hover';
import Valid from './component/Valid';
import Empty from './component/Empty';
import After from './component/After';
import styles from './index.module.less';

function Selector() {
  return (
    <div className={styles.selectContent}>
      <div>
        <div>
          <BlockTitle title="hover选择器" />
          <Hover />
        </div>
        <div>
          <BlockTitle title="valid & invalid" />
          <Valid />
        </div>
        <div>
          <BlockTitle title=":empty选择器" />
          <Empty />
        </div>
        <div>
          <BlockTitle title="::after & ::befor伪元素选择器" />
          <After />
        </div>
      </div>
      <div>
        <div>
          <BlockTitle title="+/～(相邻)选择器" />
          <AdJoin />
        </div>
        <div>
          <BlockTitle title="+/～(相邻)选择器" />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Selector;
