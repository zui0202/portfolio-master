import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';

import './PageTitle.css';

function PageTitle() {
  const content = <span>Hi, I'm <strong className="PageTitle_Highlight">Jihye Park</strong>.</span>;
  return (
    <Title tagName="h1" content={content} className="Portfolio_PageTitle" />
  );
}

PageTitle.propTypes = {
  className: PropTypes.string,
};

export default PageTitle;