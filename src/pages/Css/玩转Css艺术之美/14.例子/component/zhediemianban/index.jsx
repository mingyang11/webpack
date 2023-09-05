import React from 'react';
import './index.less';

function Zhediemianban() {
  return (
    <div className="accordion">
      <input id="collapse1" type="checkbox" hidden></input>
      <input id="collapse2" type="checkbox" hidden></input>
      <article>
        <label htmlFor="collapse1">列表1</label>
        <p>
          内容1
          <br />
          内容2
          <br />
          内容3
          <br />
          内容4
        </p>
      </article>
      <article>
        <label htmlFor="collapse2">列表2</label>
        <p>
          内容1
          <br />
          内容2
          <br />
          内容3
          <br />
          内容4
        </p>
      </article>
    </div>
  );
}

export default Zhediemianban;
