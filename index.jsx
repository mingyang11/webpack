/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// 注意这里最新版的ReactDOM是从client中导出的
import ReactDOM from 'react-dom/client';
// 因为设置了extensions，所以可以不加扩展名
import App from './App.jsx';

// 创建app根节点
const appEl = document.querySelector('#root');

// 最新版本使用的是ReactDOM.createRoot
// 如果使用ReactDOM.render()控制台会报warnning错误
const root = ReactDOM.createRoot(appEl);

// 渲染
root.render(<App />);
