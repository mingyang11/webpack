import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

function Header() {
  const navigate = useNavigate();
  const items = [
    {
      label: 'Css',
      key: 'css',
      children: [
        {
          type: 'group',
          label: '回流重绘',
          children: [
            {
              label: '回流',
              key: '/css/rerender',
            },
            {
              label: '重绘',
              key: '/css/repaint',
            },
          ],
        },
        {
          label: '布局',
          key: '/css/fulllayout',
        },
        {
          label: '选择器',
          key: '/css/selector',
        },
        {
          label: '背景与遮罩',
          key: '/css/backgroundAndMask',
        },
        {
          label: '阴影与滤镜',
          key: '/css/shadowAndMask',
        },
        {
          label: '变换与动画',
          key: '/css/transitionAndAnimation',
        },
        {
          label: '例子',
          key: '/css/example',
        },
      ],
    },
    {
      label: 'JavaScript',
      key: '/animation',
    },
    {
      label: '工程化',
      key: 'SubMenu',
      children: [
        {
          type: 'group',
          label: 'webpack',
          children: [
            {
              label: 'plugin',
              key: '/engineer/plugin',
            },
            {
              label: 'loader',
              key: '/engineer/loader',
            },
          ],
        },
      ],
    },
  ];
  const handleMenuClick = ({ key }) => {
    navigate(key);
  };
  return (
    <>
      <Menu
        onClick={handleMenuClick}
        theme="dark"
        mode="horizontal"
        items={items}
      />
    </>
  );
}

export default Header;
