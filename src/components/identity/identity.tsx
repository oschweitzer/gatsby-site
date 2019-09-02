import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {FaEnvelope, FaGithub, FaLinkedin, FaQuoteLeft, FaQuoteRight, FaTwitter} from 'react-icons/fa';
import profilePhoto from '../../../static/me.jpeg';
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
      <section className={[styles.myHeader, "hero", "is-fullheight"].join(" ")}>
        <div className={"hero-body"}>
          <section className={"container"}>
            <img
              src={profilePhoto}
              alt={"My profile photo"}
              className={styles.profilePhoto}
            />
            <h1 className={styles.mainTitle}> {data.name} </h1>
            <h3 className={"title is-3"}>{data.job}</h3>
            <blockquote className={[styles.description, "content"].join(" ")}>
              <FaQuoteLeft />
              <span> {data.description.description} </span>
              <FaQuoteRight />
            </blockquote>
            <div className='is-block'>
              <a
                className={styles.socialNetworks}
                href='https://www.linkedin.com/in/olivier-schweitzer-a494147b'
                target="_blank">
                <FaLinkedin className={styles.linkedin} />
              </a>
              <a className={styles.socialNetworks}
                 href='https://github.com/oschweitzer'
                 target="_blank">
                <FaGithub color={'white'} />
              </a>
              <a className={styles.socialNetworks}
                 href='mailto:olivier.sch68@gmail.com'
                 target="_blank">
                <FaEnvelope color={'#B23121'} />
              </a>
              <a className={styles.socialNetworks}
                 href='https://twitter.com/Oli_Schweitzer'
                 target="_blank">
                <FaTwitter color={'#1DA1F2'} />
              </a>
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Identity;
