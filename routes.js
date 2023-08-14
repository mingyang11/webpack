import React from 'react';
import Layout from './Layout';
// CSS
import Repaint from './src/Css/玩转Css艺术之美/1.回流重绘/index';
// import BoxModel from './src/Css/玩转Css艺术之美/3.全屏布局';
// import BoxModel from './src/Css/玩转Css艺术之美/4.两列布局';
// import BoxModel from './src/Css/玩转Css艺术之美/5.圣杯布局';
// import BoxModel from './src/Css/玩转Css艺术之美/7.多行溢出';
// import BoxModel from './src/Css/玩转Css艺术之美/8.变量计算';
import Animation from './src/Css/玩转Css艺术之美/9.变换与动画';

const routes = [
  {
    path: '/',
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'repatin',
        title: '回流重绘',
        element: <Repaint />,
      },
      {
        path: 'animation',
        title: '变换与动画',
        element: <Animation />,
      },
    ],
  },
];
export default routes;
