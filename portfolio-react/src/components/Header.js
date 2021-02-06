import React from 'react';
import Button from './Button';
import headerButtons from '../data/headerButtons';

function Header() {
  const buttonsList = headerButtons;

  return (
    <nav>
      { buttonsList.map((btn) => <Button buttonName={ btn } key={ `btn-${btn}` } />) }
    </nav>
  );
}

export default Header;
