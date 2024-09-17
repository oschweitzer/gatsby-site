import React from 'react';

const SocialNetwork = ({ children, link }) => {
  return (
    <a
      className={'socialNetworks'}
      href={link}
      target="_blank"
      rel="noopener"
      aria-label="Links to my social networks">
      {children}
    </a>
  );
};

export default SocialNetwork;
