import React from 'react';
import styles from './social-network.module.scss';

const SocialNetwork = ({children, link}) => {
  return (
    <a
      className={styles.socialNetworks}
      href={link}
      target='_blank'
      rel='noopener'
    aria-label='Links to my social networks'>
      {children}
    </a>
  )
};

export default SocialNetwork;
