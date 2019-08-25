import {faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import profilePhoto from '../../../static/me.jpeg';
import styles from './identity.module.css';

const Identity = () => (
  <React.Fragment>
    <section className={[styles.myHeader, 'hero', 'is-fullheight'].join(' ')}>
      <div className={'hero-body'}>
        <section className={'container'}>
          <img src={profilePhoto} alt={"My profile photo"} className={styles.profilePhoto}/>
          <h1 className={styles.mainTitle}> OLIVIER SCHWEITZER </h1>
          <blockquote className={styles.description}>
            <FontAwesomeIcon icon={faQuoteLeft} />
            <span> Computer engineer in web technologies. </span>
            <FontAwesomeIcon icon={faQuoteRight} />
          </blockquote>
        </section>
      </div>
    </section>
  </React.Fragment>
);

export default Identity;
