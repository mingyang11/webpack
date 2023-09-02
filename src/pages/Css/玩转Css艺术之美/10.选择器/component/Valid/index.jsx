import React from 'react';
import './index.css';

function Valid() {
  return (
    <div className="validContent">
      <div>
        <label>名字</label>
        <input
          type="text"
          placeholder="请输入你的名字(1到10个中文)"
          pattern="^[\u4e00-\u9fa5]{1,10}$"
          //   required
        />
      </div>
      <div>
        <label>手机</label>
        <input
          type="text"
          placeholder="请输入你的手机"
          pattern="^1[3456789]\d{9}$"
          required
        />
      </div>
      <div>
        <label>简介</label>
        <textarea required></textarea>
      </div>
    </div>
  );
}

export default Valid;
