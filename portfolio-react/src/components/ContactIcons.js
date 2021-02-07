import React from 'react';
import PropTypes from 'prop-types';

function ContactIcons({ source, user, altTxt }) {
  const gitHubURL = 'https://github.com/';
  const linkedInURL = 'https://www.linkedin.com/in/';
  const userEndpoint = user.toLowerCase();

  if (altTxt === 'linkedin icon') {
    return (
      <a href={ `${linkedInURL}${userEndpoint}` } target="_blank" rel="noreferrer">
        <img src={ source } alt={ altTxt } className="icons" />
      </a>
    );
  }

  return (
    <a href={ `${gitHubURL}${userEndpoint}` } target="_blank" rel="noreferrer">
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
