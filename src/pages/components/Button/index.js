import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Button({ onClick }) {
  return (
    <button className="wrapper" onClick={onClick} type="button">
      <strong>Switch page</strong>
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
