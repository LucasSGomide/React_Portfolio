import React from 'react';
import Button from './Button';
import headerButtons from '../data/headerButtons';
import '../style/header.css';

function Header() {
  const btnList = headerButtons;
  const type = 'header-btn';

  return (
    <nav className="header">
      { btnList.map((btn) => <Button btnName={ btn } btnType={ type } key={ btn } />) }
    </nav>
  );
}

export default Header;
