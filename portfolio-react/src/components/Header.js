import React from 'react';
import Button from './Button';
import headerButtons from '../data/headerButtons';
import githubicon from '../style/images/icons/github-icon.png';
import linkedinicon from '../style/images/icons/linkedin-icon.png';
import '../style/header.css';

function Header() {
  const btnList = headerButtons;
  const type = 'header-btn';

  return (
    <nav className="header">
      <div className="left-side">
        <h1>Meu Nome</h1>
      </div>
      <div className="right-side">
        { btnList.map((btn) => <Button btnName={ btn } btnType={ type } key={ btn } />) }
        <div className="icons-box">
          <img src={ githubicon } alt="github icon" className="icons" />
          <img src={ linkedinicon } alt="linkedin icon" className="icons" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
