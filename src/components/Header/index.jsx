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
      ],
    },
    {
      label: 'JavaScript',
      key: '/animation',
    },
    // {
    //   label: '工程化',
    //   key: 'SubMenu',
    // },
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
