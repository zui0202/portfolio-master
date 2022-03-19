import React from 'react';
import PropTypes from 'prop-types';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGithubAlt from 'react-icons/lib/fa/github-alt';
import FaCodepen from 'react-icons/lib/fa/codepen';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';

import './ContactButton.css';

const components = {
  FaFacebook,
  FaGithubAlt,
  FaCodepen,
  FaEnvelopeO,
};

function ContactButton({ tagName, iconDesc, linkURL }) {
  const TagName = components[tagName];
  return (
    <a
      href={linkURL}
      target="_blank"
      className="Portfolio_ContactButton rounded-circle d-inline-flex justify-content-center align-items-center"
    >
      <TagName />
      <span className="d-none">{iconDesc}</span>
    </a>
  );
}

ContactButton.propTypes = {
  tagName: PropTypes.string.isRequired,
  iconDesc: PropTypes.string.isRequired,
  linkURL: PropTypes.string.isRequired,
};

export default ContactButton;
