import React from 'react';
import styles from './social-network.module.scss';

const SocialNetwork = ({children, link}) => {
  return (
    <a
      className={styles.socialNetworks}
      href={link}
      target='_blank'>
      {children}
    </a>
  )
};

export default SocialNetwork;
