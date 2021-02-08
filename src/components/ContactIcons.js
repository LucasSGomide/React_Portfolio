import React from 'react';
import PropTypes from 'prop-types';
import devInfo from '../data/devInfo';

function ContactIcons({ source, altTxt }) {
  const gitHubURL = devInfo.links.github;
  const linkedInURL = devInfo.links.linkedin;

  if (altTxt === 'linkedin icon') {
    return (
      <a href={ `${linkedInURL}` } target="_blank" rel="noreferrer">
        <img src={ source } alt={ altTxt } className="icons" />
      </a>
    );
  }

  return (
    <a href={ `${gitHubURL}` } target="_blank" rel="noreferrer">
      <img src={ source } alt={ altTxt } className="icons" />
    </a>
  );
}

export default ContactIcons;

ContactIcons.propTypes = {
  source: PropTypes.string,
  user: PropTypes.string,
  altTxt: PropTypes.string,
}.isRequired;
