import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin, FaQuoteLeft, FaQuoteRight, FaTwitter} from 'react-icons/fa';
import profilePhoto from '../../../static/me.jpeg';
import SocialNetwork from '../social-network/social-network';
import styles from './identity.module.scss';

const idQuery = graphql`
  {
    allContentfulIdentity(limit: 1) {
      edges {
        node {
          description {
            description
          }
          job
          name
        }
      }
    }
  }
`;

const Identity = () => {
  const data = useStaticQuery(idQuery).allContentfulIdentity.edges[0].node;
  return (
    <React.Fragment>
      <section className={[styles.myHeader, 'hero', 'is-fullheight'].join(' ')}>
        <div className={'hero-body'}>
          <section className={'container'}>
            <img
              src={profilePhoto}
              alt={'My profile photo'}
              className={styles.profilePhoto}
            />
            <h1 className={styles.mainTitle}> {data.name} </h1>
            <h3 className={['title', 'is-3', styles.subtitle].join(' ')}>{data.job}</h3>
            <blockquote className={[styles.description, 'content'].join(' ')}>
              <FaQuoteLeft />
              <span> {data.description.description} </span>
              <FaQuoteRight />
            </blockquote>
            <div className='is-block'>
              <SocialNetwork link={'https://www.linkedin.com/in/olivier-schweitzer-a494147b'}
                             children={<FaLinkedin className={styles.linkedIn} />} />
              <SocialNetwork link={'https://github.com/oschweitzer'}
                             children={<FaGithub color={'var(--textNormal)'} />} />
              <SocialNetwork link={'mailto:olivier.sch68@gmail.com'}
                             children={<FaEnvelope color={'#B23121'} />} />
              <SocialNetwork link={'https://twitter.com/Oli_Schweitzer'}
                             children={<FaTwitter color={'#1DA1F2'} />} />
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Identity;
