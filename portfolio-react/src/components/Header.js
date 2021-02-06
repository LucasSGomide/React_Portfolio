import React from 'react';
import Button from './Button';
import Icons from './ContactIcons';
import headerButtons from '../data/headerButtons';
import githubicon from '../style/images/icons/github-icon.png';
import linkedinicon from '../style/images/icons/linkedin-icon.png';
import '../style/header.css';

function Header() {
  const btnList = headerButtons;
  const TileName = "Meu Nome";
  const bType = 'header-btn';
  const iconEndpoint = 'LucasSGomide';
  const altGitHub = 'github icon';
  const altLinkedIn = 'linkedin icon';

  return (
    <nav className="header">
      <div className="left-side">
        <h1>{TileName}</h1>
      </div>
      <div className="right-side">
        { btnList.map((btn) => <Button btnName={ btn } btnType={ bType } key={ btn } />) }
        <div className="icons-box">
          <Icons source={ githubicon } user={ iconEndpoint } altTxt={ altGitHub } />
          <Icons source={ linkedinicon } user={ iconEndpoint } altTxt={ altLinkedIn } />
        </div>
      </div>
    </nav>
  );
}

export default Header;
