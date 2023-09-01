import React from 'react';
import styles from './index.module.less';
import './index.css';

function AdJoin() {
  return (
    <div className={styles.adjoinContent}>
      <div className="specify-selector">
        <ul className="list">
          <li>同胞元素</li>
          <li className="next">当前元素</li>
          <li>同胞元素</li>
          <li>同胞元素</li>
          <li>同胞元素</li>
        </ul>
        <ul className="list">
          <li>同胞元素</li>
          <li className="next-all">当前元素</li>
          <li>同胞元素</li>
          <li>同胞元素</li>
          <li>同胞元素</li>
        </ul>
        <ul className="list">
          <li>同胞元素</li>
          <li className="next-filter">当前元素</li>
          <li>同胞元素</li>
          <li className="filter">同胞元素</li>
          <li>同胞元素</li>
        </ul>
      </div>

      <div className="specify-selector">
        <div className="button">
          <input id="btn1" type="radio" name="btns" hidden />
          <label for="btn1">点击我切换样式</label>
        </div>
        <div className="button">
          <input id="btn2" type="radio" name="btns" hidden />
          <label for="btn2">点击我切换样式</label>
        </div>
        <div className="button">
          <input id="btn3" type="radio" name="btns" hidden />
          <label for="btn3">点击我切换样式</label>
        </div>
      </div>
    </div>
  );
}

export default AdJoin;
