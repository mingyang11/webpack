import React from 'react';
import BlockTitle from '../../../../components/BlockTitle';
import Shoufengqin from './component/shoufengqin';
import Zhediemianban from './component/zhediemianban';
import LoginForm from './component/loginForm';
import Fangdajing from './component/fangdajing';
import styles from './index.module.less';

function Selector() {
  return (
    <div className={styles.selectContent}>
      <div>
        <div>
          <BlockTitle title="手风琴" showBorder />
          <Shoufengqin />
        </div>
        <div>
          <BlockTitle title="折叠面板" showBorder />
          <Zhediemianban />
        </div>
        <div>
          <BlockTitle title="登陆表单" showBorder />
          <LoginForm />
        </div>
      </div>
      <div>
        <div>
          <BlockTitle title="滚动渐变背景" showBorder />
          <Fangdajing />
        </div>
      </div>
    </div>
  );
}

export default Selector;
