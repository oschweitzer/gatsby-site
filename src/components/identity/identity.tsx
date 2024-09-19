import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
  FaTwitter,
} from 'react-icons/fa';
import profilePicture from '../../../static/me.png';
import SocialNetwork from '../social-network/social-network';
import * as identityStyles from './identity.module.css';

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
      <section className={identityStyles.myHeader}>
        <div className={'h-dvh bg-cover flex flex-col items-center justify-center'}>
          <section className={'flex flex-col gap-2'}>
            <img
              src={profilePicture}
              alt={'My profile photo'}
              className={identityStyles.profilePhoto}
            />
            <h1
              className={`${identityStyles.mainTitle} mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white`}>
              {data.name}
            </h1>
            <h3 className={`${identityStyles.subtitle}`}>{data.job}</h3>
            <blockquote
              className={`${identityStyles.description} mt-8 flex flex-col justify-center items-center`}>
              <FaQuoteLeft />
              <span className={'mx-10'}> "{data.description.description}" </span>
            </blockquote>
            <div className="mt-10 flex-row flex justify-center content-center gap-4">
              <SocialNetwork
                link={'https://www.linkedin.com/in/olivier-schweitzer-a494147b'}
                children={<FaLinkedin className={`${identityStyles.linkedIn}`} />}
              />
              <SocialNetwork
                link={'https://github.com/oschweitzer'}
                children={<FaGithub color={'var(--textNormal)'} />}
              />
              <SocialNetwork
                link={'mailto:olivier.sch68@gmail.com'}
                children={<FaEnvelope color={'#B23121'} />}
              />
              <SocialNetwork
                link={'https://twitter.com/Oli_Schweitzer'}
                children={<FaTwitter color={'#1DA1F2'} />}
              />
            </div>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Identity;
