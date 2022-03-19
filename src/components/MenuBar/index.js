import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TextButton from '../TextButton';

function MenuButton({ menuName }) {
  return (
    <TextButton text={menuName} className="w-100" />
  );
}

function MenuBar() {
  return (
    <ul className="row justify-content-center w-100 mx-0">
      <li className="col-3 col-md-2">
        <Link to="/portfolio">
          <MenuButton menuName="Projects" />
        </Link>
      </li>
      <li className="col-3 col-md-2">
        <Link to="/portfolio/about">
          <MenuButton menuName="About" />
        </Link>
      </li>
      <li className="col-3 col-md-2">
        <a href="https://mogwa22.tistory.com/" target="_blank" rel="noopener noreferrer">
          <MenuButton menuName="Blog" />
        </a>
      </li>
    </ul>
  );
}

MenuBar.propTypes = {
  className: PropTypes.string,
};

export default MenuBar;