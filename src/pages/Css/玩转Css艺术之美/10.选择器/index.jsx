import React from 'react';
import BlockTitle from '../../../../components/BlockTitle';
import AdJoin from './component/AdJoin';
import styles from './index.module.less';

function Selector() {
  return (
    <div className={styles.selectContent}>
      <div>
        <div>
          <BlockTitle title="+/～(相邻)选择器" />
          <div></div>
        </div>
        <div>
          <BlockTitle title="+/～(相邻)选择器" />
          <div></div>
        </div>
        <div>
          <BlockTitle title="+/～(相邻)选择器" />
        </div>
        <div>
          <BlockTitle title="+/～(相邻)选择器" />
          <div></div>
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
