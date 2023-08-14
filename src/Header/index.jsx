import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';

function Header() {
  return (
    <>
      {routes[0].children.map((item) => {
        return (
          <div
            key={item.path}
            style={{ padding: '0px 10px', cursor: 'pointer' }}
          >
            <Link to={`${item.path}`}>{item.title}</Link>
          </div>
        );
      })}
    </>
  );
}

export default Header;
