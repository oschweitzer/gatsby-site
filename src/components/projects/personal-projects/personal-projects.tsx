import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {FaHome} from 'react-icons/fa';
import SectionTitle from '../../titles/section';
import GithubProject from '../github-project/github-project';
import * as styles from './personal-projects.module.scss';

const query = graphql`
  {
    github {
      viewer {
        repositories(
          first: 50
          privacy: PUBLIC
          isFork: false
          ownerAffiliations: OWNER
          orderBy: { field: NAME, direction: ASC }
        ) {
          nodes {
            name
            description
            url
            repositoryTopics(first: 20) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;


const PersonalProject = () => {
  const data = useStaticQuery(query);
  return (
    <React.Fragment>
      <section className={styles.personalProjects}>
        <SectionTitle text={' Personal projects'} children={<FaHome color={'#D6B4A7'} />} />
        <div className='columns is-multiline'>
          {data.github.viewer.repositories.nodes.map((repository, index: number) => (
            <div key={index} className='column is-one-third'>
              <GithubProject repository={repository} />
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default PersonalProject;
