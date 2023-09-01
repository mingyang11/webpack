import React from 'react';
import Layout from './layout';
// CSS
import Repaint from './src/pages/Css/玩转Css艺术之美/1.回流重绘/index';
import FullLayout from './src/pages/Css/玩转Css艺术之美/3.全屏布局';
// import BoxModel from './src/Css/玩转Css艺术之美/4.两列布局';
// import BoxModel from './src/Css/玩转Css艺术之美/5.圣杯布局';
// import BoxModel from './src/Css/玩转Css艺术之美/7.多行溢出';
// import BoxModel from './src/Css/玩转Css艺术之美/8.变量计算';
import Animation from './src/pages/Css/玩转Css艺术之美/9.变换与动画';
import Selector from './src/pages/Css/玩转Css艺术之美/10.选择器';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'css',
        title: 'css',
        children: [
          {
            path: 'repaint',
            title: '重绘',
            element: <Repaint />,
          },
          {
            path: 'rerender',
            title: '回流',
            element: <Repaint />,
          },
          {
            path: 'fulllayout',
            title: '回流',
            element: <FullLayout />,
          },
          {
            path: 'selector',
            title: '选择器',
            element: <Selector />,
          },
        ],
      },
      {
        path: 'animation',
        title: '变换与动画',
        element: <Animation />,
      },
      {
        path: 'engineer',
        title: '工程化',
        children: [
          {
            path: 'plugin',
            title: 'plugin',
            element: <Repaint />,
          },
          {
            path: 'loader',
            title: 'loader',
            element: <Repaint />,
          },
        ],
      },
    ],
  },
];
export default routes;
