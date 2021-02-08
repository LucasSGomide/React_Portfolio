import React from 'react';
import Button from './Button';
import devInfo from '../data/devInfo';
import Icons from './ContactIcons';
import headerButtons from '../data/headerButtons';
import githubicon from '../style/images/icons/github-icon.png';
import linkedinicon from '../style/images/icons/linkedin-icon.png';
import '../style/header.css';

function Header() {
  const btnList = headerButtons;
  const bType = 'header-btn';
  const altGitHub = 'github icon';
  const altLinkedIn = 'linkedin icon';

  return (
    <nav className="header">
      <div className="left-side">
        <h1>{devInfo.name}</h1>
      </div>
      <div className="right-side">
        { btnList.map((btn) => <Button btnName={ btn } btnType={ bType } key={ btn } />) }
        <div className="icons-box">
          <Icons source={ githubicon } altTxt={ altGitHub } />
          <Icons source={ linkedinicon } altTxt={ altLinkedIn } />
        </div>
      </div>
    </nav>
  );
}

export default Header;
