import React from 'react';
import PropTypes from 'prop-types';

function Button({ btnName, btnType }) {
  const btnHeader = 'header-btn';

  if (btnType === btnHeader) {
    return (
      <button
        className="page-btn"
        type="button"
      >
        { btnName }
      </button>
    );
  }
  return (
    <button
      className="btn btn-outline-secondary"
      type="button"
    >
      { btnName }
    </button>
  );
}

export default Button;

Button.propTypes = {
  btnName: PropTypes.string,
  btnType: PropTypes.string,
}.isRequired;
